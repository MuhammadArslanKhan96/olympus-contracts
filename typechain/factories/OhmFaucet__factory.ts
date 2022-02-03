/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OhmFaucet, OhmFaucetInterface } from "../OhmFaucet";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_ohm",
        type: "address",
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
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipPulled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipPushed",
    type: "event",
  },
  {
    inputs: [],
    name: "dispense",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "ohm",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    name: "pullManagement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner_",
        type: "address",
      },
    ],
    name: "pushManagement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceManagement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_ohm",
        type: "address",
      },
    ],
    name: "setOhm",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516105303803806105308339818101604052602081101561003357600080fd5b5051600080546001600160a01b03191633178082556040516001600160a01b039190911691907fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba908290a3600280546001600160a01b0319166001600160a01b0392909216919091179055610483806100ad6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806346f68ee91161005b57806346f68ee9146100b85780635a96ac0a146100de5780638da5cb5b146100e6578063f9224d3c146100ee5761007d565b806302b1d23914610082578063089208d8146100a65780630adb1a9a146100b0575b600080fd5b61008a610114565b604080516001600160a01b039092168252519081900360200190f35b6100ae610123565b005b6100ae6101d8565b6100ae600480360360208110156100ce57600080fd5b50356001600160a01b031661025d565b6100ae610317565b61008a6103c4565b6100ae6004803603602081101561010457600080fd5b50356001600160a01b03166103d3565b6002546001600160a01b031681565b6000546001600160a01b03163314610182576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03909116907faa151555690c956fc3ea32f106bb9f119b5237a061eaa8557cff3e51e3792c8d908390a3600080546001600160a01b0319908116909155600180549091169055565b6002546040805163a9059cbb60e01b8152336004820152633b9aca00602482015290516001600160a01b039092169163a9059cbb916044808201926020929091908290030181600087803b15801561022f57600080fd5b505af1158015610243573d6000803e3d6000fd5b505050506040513d602081101561025957600080fd5b5050565b6000546001600160a01b031633146102bc576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03808516939216917fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba91a3600180546001600160a01b0319166001600160a01b0392909216919091179055565b6001546001600160a01b031633146103605760405162461bcd60e51b81526004018080602001828103825260228152602001806104556022913960400191505060405180910390fd5b600154600080546040516001600160a01b0393841693909116917faa151555690c956fc3ea32f106bb9f119b5237a061eaa8557cff3e51e3792c8d91a360018054600080546001600160a01b03199081166001600160a01b03841617909155169055565b6000546001600160a01b031690565b6000546001600160a01b03163314610432576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600280546001600160a01b0319166001600160a01b039290921691909117905556fe4f776e61626c653a206d757374206265206e6577206f776e657220746f2070756c6ca164736f6c6343000705000a";

export class OhmFaucet__factory extends ContractFactory {
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
    _ohm: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OhmFaucet> {
    return super.deploy(_ohm, overrides || {}) as Promise<OhmFaucet>;
  }
  getDeployTransaction(
    _ohm: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_ohm, overrides || {});
  }
  attach(address: string): OhmFaucet {
    return super.attach(address) as OhmFaucet;
  }
  connect(signer: Signer): OhmFaucet__factory {
    return super.connect(signer) as OhmFaucet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OhmFaucetInterface {
    return new utils.Interface(_abi) as OhmFaucetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OhmFaucet {
    return new Contract(address, _abi, signerOrProvider) as OhmFaucet;
  }
}
