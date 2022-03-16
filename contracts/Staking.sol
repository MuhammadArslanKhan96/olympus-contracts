// SPDX-License-Identifier: AGPL-3.0
pragma solidity ^0.7.5;

import "./libraries/SafeMath.sol";
import "./libraries/SafeERC20.sol";

import "./interfaces/IERC20.sol";
import "./interfaces/IsOHM.sol";
import "./interfaces/IOHM.sol";
import "./interfaces/IgOHM.sol";
import "./interfaces/IDistributor.sol";

import "./types/OlympusAccessControlled.sol";
import "./types/ERC20.sol";

interface IWarmup {
    function retrieve( address staker_, uint amount_ ) external;
}

contract OkapiStaking is OlympusAccessControlled {

    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    address public immutable OKP;
    address public immutable sOKP;

    struct Epoch {
        uint length;
        uint number;
        uint endBlock;
        uint distribute;
    }
    Epoch public epoch;

    address public distributor;
    
    address public locker;
    uint public totalBonus;
    
    address public warmupContract;
    uint public warmupPeriod;
    
    constructor ( 
        address _OKP, 
        address _sOKP, 
        address _authority,
        uint _epochLength,
        uint _firstEpochNumber,
        uint _firstEpochBlock
    ) OlympusAccessControlled(IOlympusAuthority(_authority)) {
        require( _OKP != address(0) );
        OKP = _OKP;
        require( _sOKP != address(0) );
        sOKP = _sOKP;
        
        epoch = Epoch({
            length: _epochLength,
            number: _firstEpochNumber,
            endBlock: _firstEpochBlock,
            distribute: 0
        });
    }

    struct Claim {
        uint deposit;
        uint gons;
        uint expiry;
        bool lock; // prevents malicious delays
    }
    mapping( address => Claim ) public warmupInfo;

    // Vesting period is use to sustainibilty for project ==> User will paid 10% if he/she unstake their coin before 10 days after staking
    struct VestingPeriod {
        uint256 period;
        address user;
        uint256 amount;
    }

    mapping(address => VestingPeriod) public vestingPeriodInfo;

    
    struct DeductionFee {
        uint256 burn = 500;
        uint256 team = 500;
        address teamWallet;
    }

    DeductionFee public deductionFee;

    /**
        @notice stake OKP to enter warmup
        @param _amount uint
        @return bool
     */
    function stake( uint _amount, address _recipient ) external returns ( bool ) {
        rebase();
        
        IERC20( OKP ).safeTransferFrom( msg.sender, address(this), _amount );

        Claim memory info = warmupInfo[ _recipient ];
        require( !info.lock, "Deposits for account are locked" );

        warmupInfo[ _recipient ] = Claim ({
            deposit: info.deposit.add( _amount ),
            gons: info.gons.add( IsOHM( sOKP ).gonsForBalance( _amount ) ),
            expiry: epoch.number.add( warmupPeriod ),
            lock: false
        });
        
        VestingPeriod memory periodInfo = vestingPeriodInfo[ msg.sender ];
        vestingPeriodInfo[_recipient] = VestingPeriod({
            period: block.timestamp + 10 days,
            user: _recipient,
            amount: periodInfo.amount.add(_amount)
        });
        
        IERC20( sOKP ).safeTransfer( warmupContract, _amount );
        return true;
    }

    /**
        @notice retrieve sOKP from warmup
        @param _recipient address
     */
    function claim ( address _recipient ) public {
        Claim memory info = warmupInfo[ _recipient ];
        if ( epoch.number >= info.expiry && info.expiry != 0 ) {
            delete warmupInfo[ _recipient ];
            IWarmup( warmupContract ).retrieve( _recipient, IsOHM( sOKP ).balanceForGons( info.gons ) );
        }
    }

    /**
        @notice forfeit sOKP in warmup and retrieve OKP
     */
    function forfeit() external {
        Claim memory info = warmupInfo[ msg.sender ];
        delete warmupInfo[ msg.sender ];

        IWarmup( warmupContract ).retrieve( address(this), IsOHM( sOKP ).balanceForGons( info.gons ) );
        IERC20( OKP ).safeTransfer( msg.sender, info.deposit );
    }

    /**
        @notice prevent new deposits to address (protection from malicious activity)
     */
    function toggleDepositLock() external {
        warmupInfo[ msg.sender ].lock = !warmupInfo[ msg.sender ].lock;
    }

    /**
        @notice redeem sOKP for OKP
        @param _amount uint
        @param _trigger bool
     */
    function unstake( uint _amount, bool _trigger ) external {
        if ( _trigger ) {
            rebase();
        }
        IERC20( sOKP ).safeTransferFrom( msg.sender, address(this), _amount );
         VestingPeriod memory periodInfo = vestingPeriodInfo[ msg.sender ];
         if(block.timestamp >= periodInfo.period) {
            IERC20( OKP ).safeTransfer( msg.sender, _amount );
         } else {
             _deductFee(_amount);
         }
    }

    function _deductFee(uint256 _amount) internal  {
         require(_amount > 0, "Ammount not valid for fee deduction");
         VestingPeriod memory periodInfo = vestingPeriodInfo[ msg.sender ];
         DeductionFee memory fee = deductionFee;

         uint256 feeForTeam = _amount.mul(fee.team).div(10000); // 5% 
         uint256 feeForBurn = _amount.mul(fee.burn).div(10000); // 5% 

        IOHM( OKP ).burnFrom( msg.sender, feeForBurn );
        IERC20( OKP ).safeTransfer( fee.teamWallet, feeForTeam );

         if(_amount == periodInfo.amount) {
             delete vestingPeriodInfo[ msg.sender ];
         } else{
          vestingPeriodInfo[msg.sender] = VestingPeriod({
            period: periodInfo.period,
            user: periodInfo.user,
            amount: periodInfo.amount.sub(feeForTeam.add(feeForBurn))
        });
        }
    }


    /**
        @notice returns the sOKP index, which tracks rebase growth
        @return uint
     */
    function index() public view returns ( uint ) {
        return IsOHM( sOKP ).index();
    }

    /**
        @notice trigger rebase if epoch over
     */
    function rebase() public {
        if( epoch.endBlock <= block.number ) {

            IsOHM( sOKP ).rebase( epoch.distribute, epoch.number );

            epoch.endBlock = epoch.endBlock.add( epoch.length );
            epoch.number++;
            
            if ( distributor != address(0) ) {
                IDistributor( distributor ).distribute();
            }

            uint balance = contractBalance();
            uint staked = IsOHM( sOKP ).circulatingSupply();

            if( balance <= staked ) {
                epoch.distribute = 0;
            } else {
                epoch.distribute = balance.sub( staked );
            }
        }
    }

    /**
        @notice returns contract OKP holdings, including bonuses provided
        @return uint
     */
    function contractBalance() public view returns ( uint ) {
        return IERC20( OKP ).balanceOf( address(this) ).add( totalBonus );
    }

    /**
        @notice provide bonus to locked staking contract
        @param _amount uint
     */
    function giveLockBonus( uint _amount ) external {
        require( msg.sender == locker );
        totalBonus = totalBonus.add( _amount );
        IERC20( sOKP ).safeTransfer( locker, _amount );
    }

    /**
        @notice reclaim bonus from locked staking contract
        @param _amount uint
     */
    function returnLockBonus( uint _amount ) external {
        require( msg.sender == locker );
        totalBonus = totalBonus.sub( _amount );
        IERC20( sOKP ).safeTransferFrom( locker, address(this), _amount );
    }

    enum CONTRACTS { DISTRIBUTOR, WARMUP, LOCKER }

    /**
        @notice sets the contract address for LP staking
        @param _contract address
     */
    function setContract( CONTRACTS _contract, address _address ) external onlyGovernor() {
        if( _contract == CONTRACTS.DISTRIBUTOR ) { // 0
            distributor = _address;
        } else if ( _contract == CONTRACTS.WARMUP ) { // 1
            require( warmupContract == address( 0 ), "Warmup cannot be set more than once" );
            warmupContract = _address;
        } else if ( _contract == CONTRACTS.LOCKER ) { // 2
            require( locker == address(0), "Locker cannot be set more than once" );
            locker = _address;
        }
    }
    
    /**
     * @notice set warmup period for new stakers
     * @param _warmupPeriod uint
     */
    function setWarmup( uint _warmupPeriod ) external onlyGovernor() {
        warmupPeriod = _warmupPeriod;
    }

    function setDeductionFeeAndAddress (uint _burn, uint _team, address teamWallet) external onlyGovernor() {
        deductionFee = DeductionFee({
            burn: _burn,
            team: _team,
            teamWallet: teamWallet
        });
    }
}
