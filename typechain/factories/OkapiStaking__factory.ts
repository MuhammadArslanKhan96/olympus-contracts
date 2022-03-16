/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OkapiStaking, OkapiStakingInterface } from "../OkapiStaking";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_OKP",
        type: "address",
      },
      {
        internalType: "address",
        name: "_sOKP",
        type: "address",
      },
      {
        internalType: "address",
        name: "_authority",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_epochLength",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_firstEpochNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_firstEpochBlock",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IOlympusAuthority",
        name: "authority",
        type: "address",
      },
    ],
    name: "AuthorityUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "OKP",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "authority",
    outputs: [
      {
        internalType: "contract IOlympusAuthority",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "contractBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deductionFee",
    outputs: [
      {
        internalType: "uint256",
        name: "burn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "team",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "teamWallet",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "distributor",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "epoch",
    outputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "number",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "distribute",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "forfeit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "giveLockBonus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "index",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "locker",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rebase",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "returnLockBonus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "sOKP",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOlympusAuthority",
        name: "_newAuthority",
        type: "address",
      },
    ],
    name: "setAuthority",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum OkapiStaking.CONTRACTS",
        name: "_contract",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_burn",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "_team",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "teamWallet",
        type: "address",
      },
    ],
    name: "setDeductionFeeAndAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_warmupPeriod",
        type: "uint256",
      },
    ],
    name: "setWarmup",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "stake",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "toggleDepositLock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalBonus",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_trigger",
        type: "bool",
      },
    ],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "vestingPeriodInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "period",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "warmupContract",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "warmupInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "deposit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gons",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "lock",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "warmupPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x610100604052600c60c08190526b15539055551213d49256915160a21b60e09081526200003091600091906200015b565b503480156200003e57600080fd5b506040516200226b3803806200226b833981810160405260c08110156200006457600080fd5b50805160208201516040808401516060850151608086015160a090960151600180546001600160a01b0319166001600160a01b038516908117909155935195969495929491939192909185917f2f658b440c35314f52658ea8a740e05b284cdc84dc9ae01e891f21b8933e7cad90600090a2506001600160a01b038616620000eb57600080fd5b6001600160601b0319606087901b166080526001600160a01b0385166200011157600080fd5b6001600160601b0319606095861b1660a052604080516080810182528481526020810184905290810182905260009501859052600292909255600355600455506005555062000207565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620001935760008555620001de565b82601f10620001ae57805160ff1916838001178555620001de565b82800160010185558215620001de579182015b82811115620001de578251825591602001919060010190620001c1565b50620001ec929150620001f0565b5090565b5b80821115620001ec5760008155600101620001f1565b60805160601c60a05160601c611fea62000281600039806104eb52806105195280610612528061070b5280610a3a5280610c035280610f8b528061105c52806111a3528061157352806116d35250806109445280610e71528061101152806114a252806116725280611b5b5280611bfb5250611fea6000f3fe608060405234801561001057600080fd5b50600436106101ae5760003560e01c80639ebea88c116100ee578063c9f464ff11610097578063deac361a11610071578063deac361a1461047e578063ed4acaa814610486578063f3d86e4a1461048e578063f62ae76a14610496576101ae565b8063c9f464ff14610451578063d7b96d4e1461046e578063d985468c14610476576101ae565b8063bf7e214f116100c8578063bf7e214f14610407578063bfe109281461040f578063c1039aba14610417576101ae565b80639ebea88c146103d2578063a8dd07dc146103f7578063af14052c146103ff576101ae565b80637acb77571161015b5780638b7afe2e116101355780638b7afe2e146103485780638f077b8314610350578063900cf0cf1461035857806392776b0d14610386576101ae565b80637acb7757146102aa578063812c2bec146102ea578063865e6fd314610319576101ae565b80632986c0e51161018c5780632986c0e51461021c5780636746f4c2146102365780637a9e5e4b14610284576101ae565b806303c23670146101b35780630dd29422146101d25780631e83409a146101f6575b600080fd5b6101d0600480360360208110156101c957600080fd5b50356104b3565b005b6101da610517565b604080516001600160a01b039092168252519081900360200190f35b6101d06004803603602081101561020c57600080fd5b50356001600160a01b031661053b565b610224610707565b60408051918252519081900360200190f35b61025c6004803603602081101561024c57600080fd5b50356001600160a01b0316610793565b6040805194855260208501939093528383019190915215156060830152519081900360800190f35b6101d06004803603602081101561029a57600080fd5b50356001600160a01b03166107bd565b6102d6600480360360408110156102c057600080fd5b50803590602001356001600160a01b031661092d565b604080519115158252519081900360200190f35b6102f2610c39565b6040805193845260208401929092526001600160a01b031682820152519081900360600190f35b6101d06004803603604081101561032f57600080fd5b50803560ff1690602001356001600160a01b0316610c4e565b610224610e67565b6101d0610f13565b610360610f37565b604080519485526020850193909352838301919091526060830152519081900360800190f35b6103ac6004803603602081101561039c57600080fd5b50356001600160a01b0316610f46565b604080519384526001600160a01b03909216602084015282820152519081900360600190f35b6101d0600480360360408110156103e857600080fd5b50803590602001351515610f70565b61022461104b565b6101d0611051565b6101da61124b565b6101da61125a565b6101d06004803603606081101561042d57600080fd5b50803560ff90811691602081013590911690604001356001600160a01b0316611269565b6101d06004803603602081101561046757600080fd5b50356113a0565b6101da611491565b6101da6114a0565b6102246114c4565b6101da6114ca565b6101d06114d9565b6101d0600480360360208110156104ac57600080fd5b503561169b565b6007546001600160a01b031633146104ca57600080fd5b6008546104d790826116fd565b600855600754610514906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811691168361175e565b50565b7f000000000000000000000000000000000000000000000000000000000000000081565b610543611ed5565b506001600160a01b0381166000908152600b6020908152604091829020825160808101845281548152600182015492810192909252600281015492820183905260039081015460ff1615156060830152549091118015906105a75750604081015115155b15610703576001600160a01b038083166000908152600b602090815260408083208381556001810184905560028101939093556003909201805460ff19169055600954848201518351637965d56d60e01b8152600481019190915292519084169363c3a2a6659387937f000000000000000000000000000000000000000000000000000000000000000090921692637965d56d92602480840193919291829003018186803b15801561065857600080fd5b505afa15801561066c573d6000803e3d6000fd5b505050506040513d602081101561068257600080fd5b5051604080517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b1681526001600160a01b039093166004840152602483019190915251604480830192600092919082900301818387803b1580156106ea57600080fd5b505af11580156106fe573d6000803e3d6000fd5b505050505b5050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316632986c0e56040518163ffffffff1660e01b815260040160206040518083038186803b15801561076257600080fd5b505afa158015610776573d6000803e3d6000fd5b505050506040513d602081101561078c57600080fd5b5051905090565b600b6020526000908152604090208054600182015460028301546003909301549192909160ff1684565b600160009054906101000a90046001600160a01b03166001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b15801561080b57600080fd5b505afa15801561081f573d6000803e3d6000fd5b505050506040513d602081101561083557600080fd5b50516000906001600160a01b031633146108e25760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156108d35780601f106108a8576101008083540402835291602001916108d3565b820191906000526020600020905b8154815290600101906020018083116108b657829003601f168201915b50509250505060405180910390fd5b50600180546001600160a01b0319166001600160a01b0383169081179091556040517f2f658b440c35314f52658ea8a740e05b284cdc84dc9ae01e891f21b8933e7cad90600090a250565b6000610937611051565b61096c6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330866118dd565b610974611ed5565b506001600160a01b0382166000908152600b602090815260409182902082516080810184528154815260018201549281019290925260028101549282019290925260039091015460ff161580156060830152610a17576040805162461bcd60e51b815260206004820152601f60248201527f4465706f7369747320666f72206163636f756e7420617265206c6f636b656400604482015290519081900360640190fd5b604080516080810190915281518190610a3090876116fd565b8152602001610ad37f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316631bd39674886040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b158015610a9c57600080fd5b505afa158015610ab0573d6000803e3d6000fd5b505050506040513d6020811015610ac657600080fd5b50516020850151906116fd565b8152600a54600354602090920191610aea916116fd565b8152600060209182018190526001600160a01b0386168152600b82526040908190208351815591830151600183015582015160028201556060909101516003909101805460ff1916911515919091179055610b43611eff565b50336000908152600c60209081526040918290208251606080820185528254825260018301546001600160a01b039081168386015260029093015482860190815285519182018652620d2f00420182529288169381019390935290519092820190610bae90886116fd565b90526001600160a01b038581166000908152600c602090815260409182902084518155908401516001820180546001600160a01b031916918516919091179055920151600290920191909155600954610c2c917f0000000000000000000000000000000000000000000000000000000000000000811691168761175e565b6001925050505b92915050565b600d54600e54600f546001600160a01b031683565b600160009054906101000a90046001600160a01b03166001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b158015610c9c57600080fd5b505afa158015610cb0573d6000803e3d6000fd5b505050506040513d6020811015610cc657600080fd5b50516000906001600160a01b03163314610d395760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156108d35780601f106108a8576101008083540402835291602001916108d3565b506000826002811115610d4857fe5b1415610d6e57600680546001600160a01b0319166001600160a01b038316179055610703565b6001826002811115610d7c57fe5b1415610dea576009546001600160a01b031615610dca5760405162461bcd60e51b8152600401808060200182810382526023815260200180611f776023913960400191505060405180910390fd5b600980546001600160a01b0319166001600160a01b038316179055610703565b6002826002811115610df857fe5b1415610703576007546001600160a01b031615610e465760405162461bcd60e51b8152600401808060200182810382526023815260200180611f546023913960400191505060405180910390fd5b600780546001600160a01b0383166001600160a01b03199091161790555050565b6000610f0e6008547f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610edc57600080fd5b505afa158015610ef0573d6000803e3d6000fd5b505050506040513d6020811015610f0657600080fd5b5051906116fd565b905090565b336000908152600b60205260409020600301805460ff19811660ff90911615179055565b60025460035460045460055484565b600c6020526000908152604090208054600182015460029092015490916001600160a01b03169083565b8015610f7e57610f7e611051565b610fb36001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330856118dd565b610fbb611eff565b50336000908152600c60209081526040918290208251606081018452815480825260018301546001600160a01b03169382019390935260029091015492810192909252421061103d576110386001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016338561175e565b611046565b61104683611a5d565b505050565b60085481565b6004544310611249577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663058ecdb46002600301546002600101546040518363ffffffff1660e01b81526004018083815260200182815260200192505050602060405180830381600087803b1580156110d257600080fd5b505af11580156110e6573d6000803e3d6000fd5b505050506040513d60208110156110fc57600080fd5b505060025460045461110d916116fd565b6004556003805460010190556006546001600160a01b03161561119357600660009054906101000a90046001600160a01b03166001600160a01b031663e4fc6b6d6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561117a57600080fd5b505af115801561118e573d6000803e3d6000fd5b505050505b600061119d610e67565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316639358928b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156111fa57600080fd5b505afa15801561120e573d6000803e3d6000fd5b505050506040513d602081101561122457600080fd5b50519050808211611239576000600555610703565b6112438282611ce5565b60055550505b565b6001546001600160a01b031681565b6006546001600160a01b031681565b600160009054906101000a90046001600160a01b03166001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b1580156112b757600080fd5b505afa1580156112cb573d6000803e3d6000fd5b505050506040513d60208110156112e157600080fd5b50516000906001600160a01b031633146113545760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156108d35780601f106108a8576101008083540402835291602001916108d3565b506040805160608101825260ff94851680825293909416602085018190526001600160a01b039092169301839052600d91909155600e55600f80546001600160a01b0319169091179055565b600160009054906101000a90046001600160a01b03166001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b1580156113ee57600080fd5b505afa158015611402573d6000803e3d6000fd5b505050506040513d602081101561141857600080fd5b50516000906001600160a01b0316331461148b5760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156108d35780601f106108a8576101008083540402835291602001916108d3565b50600a55565b6007546001600160a01b031681565b7f000000000000000000000000000000000000000000000000000000000000000081565b600a5481565b6009546001600160a01b031681565b6114e1611ed5565b50336000818152600b602081815260408084208151608081018352815481526001820180548286019081526002840180548487015260038501805460ff8116151560608701529a8a5297875293889055908790559590915560ff1990951690925560095492518251637965d56d60e01b8152600481019190915291516001600160a01b039384169363c3a2a6659330937f000000000000000000000000000000000000000000000000000000000000000090921692637965d56d92602480840193919291829003018186803b1580156115b957600080fd5b505afa1580156115cd573d6000803e3d6000fd5b505050506040513d60208110156115e357600080fd5b5051604080517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b1681526001600160a01b039093166004840152602483019190915251604480830192600092919082900301818387803b15801561164b57600080fd5b505af115801561165f573d6000803e3d6000fd5b5050825161051492506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169150339061175e565b6007546001600160a01b031633146116b257600080fd5b6008546116bf9082611ce5565b600855600754610514906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116911630846118dd565b600082820183811015611757576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1663a9059cbb60e01b178152925182516000946060949389169392918291908083835b602083106117f05780518252601f1990920191602091820191016117d1565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611852576040519150601f19603f3d011682016040523d82523d6000602084013e611857565b606091505b5091509150818015611885575080511580611885575080806020019051602081101561188257600080fd5b50515b6118d6576040805162461bcd60e51b815260206004820152600f60248201527f5452414e534645525f4641494c45440000000000000000000000000000000000604482015290519081900360640190fd5b5050505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166323b872dd60e01b17815292518251600094606094938a169392918291908083835b602083106119775780518252601f199092019160209182019101611958565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146119d9576040519150601f19603f3d011682016040523d82523d6000602084013e6119de565b606091505b5091509150818015611a0c575080511580611a0c5750808060200190516020811015611a0957600080fd5b50515b6106fe576040805162461bcd60e51b815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c4544000000000000000000000000604482015290519081900360640190fd5b60008111611a9c5760405162461bcd60e51b8152600401808060200182810382526023815260200180611fbb6023913960400191505060405180910390fd5b611aa4611eff565b50336000908152600c602090815260409182902082516060810184528154815260018201546001600160a01b0316928101929092526002015491810191909152611aec611f29565b5060408051606081018252600d548152600e5460208201819052600f546001600160a01b03169282019290925290600090611b369061271090611b30908790611d27565b90611d80565b90506000611b57612710611b30856000015188611d2790919063ffffffff16565b90507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166379cc679033836040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b158015611bd057600080fd5b505af1158015611be4573d6000803e3d6000fd5b5050506040840151611c2291506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016908461175e565b8360400151851415611c5b57336000908152600c602052604081208181556001810180546001600160a01b0319169055600201556118d6565b60408051606081018252855181526020808701516001600160a01b031690820152908101611c97611c8c85856116fd565b604088015190611ce5565b9052336000908152600c602090815260409182902083518155908301516001820180546001600160a01b0319166001600160a01b039092169190911790559101516002909101555050505050565b600061175783836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611dc2565b600082611d3657506000610c33565b82820282848281611d4357fe5b04146117575760405162461bcd60e51b8152600401808060200182810382526021815260200180611f9a6021913960400191505060405180910390fd5b600061175783836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611e59565b60008184841115611e515760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611e16578181015183820152602001611dfe565b50505050905090810190601f168015611e435780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60008183611ea85760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611e16578181015183820152602001611dfe565b506000838581611eb457fe5b049050838581611ec057fe5b06818502018514611ecd57fe5b949350505050565b60405180608001604052806000815260200160008152602001600081526020016000151581525090565b60405180606001604052806000815260200160006001600160a01b03168152602001600081525090565b6040518060600160405280600081526020016000815260200160006001600160a01b03168152509056fe4c6f636b65722063616e6e6f7420626520736574206d6f7265207468616e206f6e63655761726d75702063616e6e6f7420626520736574206d6f7265207468616e206f6e6365536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77416d6d6f756e74206e6f742076616c696420666f722066656520646564756374696f6ea164736f6c6343000705000a";

export class OkapiStaking__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _OKP: string,
    _sOKP: string,
    _authority: string,
    _epochLength: BigNumberish,
    _firstEpochNumber: BigNumberish,
    _firstEpochBlock: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OkapiStaking> {
    return super.deploy(
      _OKP,
      _sOKP,
      _authority,
      _epochLength,
      _firstEpochNumber,
      _firstEpochBlock,
      overrides || {}
    ) as Promise<OkapiStaking>;
  }
  getDeployTransaction(
    _OKP: string,
    _sOKP: string,
    _authority: string,
    _epochLength: BigNumberish,
    _firstEpochNumber: BigNumberish,
    _firstEpochBlock: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _OKP,
      _sOKP,
      _authority,
      _epochLength,
      _firstEpochNumber,
      _firstEpochBlock,
      overrides || {}
    );
  }
  attach(address: string): OkapiStaking {
    return super.attach(address) as OkapiStaking;
  }
  connect(signer: Signer): OkapiStaking__factory {
    return super.connect(signer) as OkapiStaking__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OkapiStakingInterface {
    return new utils.Interface(_abi) as OkapiStakingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OkapiStaking {
    return new Contract(address, _abi, signerOrProvider) as OkapiStaking;
  }
}
