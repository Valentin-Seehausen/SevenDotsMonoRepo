/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SevenDotsTreasury,
  SevenDotsTreasuryInterface,
} from "../SevenDotsTreasury";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "stakingFaktor",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "IncreaseStakingFaktor",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rewardTokenAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "stakingTokenAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "stakingFaktor",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "Stake",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "stakingTokenAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rewardTokenAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "stakingFaktor",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "Unstake",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rewardTokenAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wethAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DENOMINATOR",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "OWNER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "STAKING_RATE",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TRIGGER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentStakingFaktor",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "increaseStakingFaktor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_rewardToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stakingToken",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "number",
        type: "uint256",
      },
    ],
    name: "multiplyByStakingFaktor",
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
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardTokenSupply",
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
        internalType: "address",
        name: "_weth",
        type: "address",
      },
    ],
    name: "setWETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "shareOfTreasury",
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
        name: "rewardTokenAmount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "treasuryAmount",
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
        name: "stakeTokenAmount",
        type: "uint256",
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
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523060805234801561001457600080fd5b506080516127e661004c60003960008181610cab01528181610d5b0152818161118101528181611231015261137601526127e66000f3fe6080604052600436106101965760003560e01c806352d1902d116100e157806394e81ce91161008a578063a5d3c51e11610064578063a5d3c51e1461049b578063a694fc3a146104b0578063d547741f146104d0578063e58378bb146104f057600080fd5b806394e81ce91461044557806397f48bd514610466578063a217fddf1461048657600080fd5b8063918f8674116100bb578063918f86741461037857806391b21468146103be57806391d14854146103f257600080fd5b806352d1902d146103235780635b769f3c14610338578063652b98a31461035857600080fd5b80632f2ff15d11610143578063368acb091161011d578063368acb09146102db578063485cc955146102f05780634f1ef2861461031057600080fd5b80632f2ff15d1461027b57806336568abe1461029b5780633659cfe6146102bb57600080fd5b8063280b214211610174578063280b2142146102255780632e17de781461023b5780632e1a7d4d1461025b57600080fd5b806301ffc9a71461019b57806319efcfc5146101d0578063248a9ca3146101e7575b600080fd5b3480156101a757600080fd5b506101bb6101b636600461230d565b610524565b60405190151581526020015b60405180910390f35b3480156101dc57600080fd5b506101e56105bd565b005b3480156101f357600080fd5b5061021761020236600461234f565b600090815260c9602052604090206001015490565b6040519081526020016101c7565b34801561023157600080fd5b5061021760fb5481565b34801561024757600080fd5b506101e561025636600461234f565b61065c565b34801561026757600080fd5b506101e561027636600461234f565b610810565b34801561028757600080fd5b506101e5610296366004612391565b610bb5565b3480156102a757600080fd5b506101e56102b6366004612391565b610be0565b3480156102c757600080fd5b506101e56102d63660046123bd565b610c93565b3480156102e757600080fd5b50610217610e99565b3480156102fc57600080fd5b506101e561030b3660046123d8565b610f31565b6101e561031e366004612431565b611169565b34801561032f57600080fd5b5061021761135c565b34801561034457600080fd5b506101e56103533660046123bd565b611448565b34801561036457600080fd5b506102176103733660046123bd565b6114bb565b34801561038457600080fd5b5060fc546103a59068010000000000000000900467ffffffffffffffff1681565b60405167ffffffffffffffff90911681526020016101c7565b3480156103ca57600080fd5b506102177fc8380a9ed3810df5e9faa1cdd29581f1ee3bb82654546cebc42c97aaa1ee54d181565b3480156103fe57600080fd5b506101bb61040d366004612391565b600091825260c96020908152604080842073ffffffffffffffffffffffffffffffffffffffff93909316845291905290205460ff1690565b34801561045157600080fd5b5060fc546103a59067ffffffffffffffff1681565b34801561047257600080fd5b5061021761048136600461234f565b611689565b34801561049257600080fd5b50610217600081565b3480156104a757600080fd5b506102176116b2565b3480156104bc57600080fd5b506101e56104cb36600461234f565b611722565b3480156104dc57600080fd5b506101e56104eb366004612391565b6118d4565b3480156104fc57600080fd5b506102177fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e81565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b0000000000000000000000000000000000000000000000000000000014806105b757507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b7fc8380a9ed3810df5e9faa1cdd29581f1ee3bb82654546cebc42c97aaa1ee54d16105e881336118fa565b60fc5460fb5467ffffffffffffffff68010000000000000000830481169261061292911690612540565b61061c919061257d565b60fb819055604080519182524260208301527f29b06a31b94002c12314adb5648be2cc4552fa8b1c5e93635af5b9fecf36aabf910160405180910390a150565b60fc5460fb5460009168010000000000000000900467ffffffffffffffff16906106869084612540565b610690919061257d565b60fe546040517f79cc67900000000000000000000000000000000000000000000000000000000081523360048201526024810185905291925073ffffffffffffffffffffffffffffffffffffffff16906379cc679090604401600060405180830381600087803b15801561070357600080fd5b505af1158015610717573d6000803e3d6000fd5b505060fd546040517fa9059cbb0000000000000000000000000000000000000000000000000000000081523360048201526024810185905273ffffffffffffffffffffffffffffffffffffffff909116925063a9059cbb91506044016020604051808303816000875af1158015610792573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b691906125b8565b5060fb546040805133808252602082018690529181018490526060810192909252426080830152907f4e5916c8cf4042e78e6a44e60bf6b48e8e969ce5abf8d4227613ddc3454015ea9060a0015b60405180910390a25050565b60fd546040517f70a08231000000000000000000000000000000000000000000000000000000008152336004820152829173ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa15801561087e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a291906125da565b101561090f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f53443a20496e73756666696369656e74207237444f545320746f6b656e2e000060448201526064015b60405180910390fd5b60fd54604080517f18160ddd000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff16916318160ddd9160048083019260209291908290030181865afa15801561097f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a391906125da565b60ff546040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152849173ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015610a11573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a3591906125da565b610a3f9190612540565b610a49919061257d565b60fd546040517f79cc67900000000000000000000000000000000000000000000000000000000081523360048201526024810185905291925073ffffffffffffffffffffffffffffffffffffffff16906379cc679090604401600060405180830381600087803b158015610abc57600080fd5b505af1158015610ad0573d6000803e3d6000fd5b505060ff546040517fa9059cbb0000000000000000000000000000000000000000000000000000000081523360048201526024810185905273ffffffffffffffffffffffffffffffffffffffff909116925063a9059cbb91506044016020604051808303816000875af1158015610b4b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b6f91906125b8565b506040805133808252602082018590529181018390524260608201527febff2602b3f468259e1e99f613fed6691f3a6526effe6ef3e768ba7ae7a36c4f90608001610804565b600082815260c96020526040902060010154610bd181336118fa565b610bdb83836119cc565b505050565b73ffffffffffffffffffffffffffffffffffffffff81163314610c85576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c6600000000000000000000000000000000006064820152608401610906565b610c8f8282611ac0565b5050565b3073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161415610d59576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c00000000000000000000000000000000000000006064820152608401610906565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610dce7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614610e71576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f787900000000000000000000000000000000000000006064820152608401610906565b610e7a81611b7b565b60408051600080825260208201909252610e9691839190611ba6565b50565b60ff546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009173ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015610f08573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f2c91906125da565b905090565b600054610100900460ff16610f4c5760005460ff1615610f50565b303b155b610fdc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610906565b600054610100900460ff1615801561101b57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000166101011790555b611026600033611da5565b6110507fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e33611da5565b61107a7fc8380a9ed3810df5e9faa1cdd29581f1ee3bb82654546cebc42c97aaa1ee54d133611da5565b60fd805473ffffffffffffffffffffffffffffffffffffffff8086167fffffffffffffffffffffffff00000000000000000000000000000000000000009283161790925560fe80549285169282169290921790915560ff8054909116738cc8538d60901d19692f5ba22684732bc28f54a3179055670de0b6b3a764000060fb5560fc80546f0de0b6b3a76400000de0cd9efc7060007fffffffffffffffffffffffffffffffff000000000000000000000000000000009091161790558015610bdb57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055505050565b3073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016141561122f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c00000000000000000000000000000000000000006064820152608401610906565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166112a47f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614611347576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f787900000000000000000000000000000000000000006064820152608401610906565b61135082611b7b565b610c8f82826001611ba6565b60003073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614611423576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608401610906565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b7fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e61147381336118fa565b5060ff80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60fd54604080517f18160ddd000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff16916318160ddd9160048083019260209291908290030181865afa15801561152b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061154f91906125da565b60fd546040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152909116906370a0823190602401602060405180830381865afa1580156115bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115e391906125da565b60ff546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff909116906370a0823190602401602060405180830381865afa158015611651573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061167591906125da565b61167f9190612540565b6105b7919061257d565b60fc5460009067ffffffffffffffff68010000000000000000820481169161167f911684612540565b60fd54604080517f18160ddd000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff16916318160ddd9160048083019260209291908290030181865afa158015610f08573d6000803e3d6000fd5b60fb5460fc546000919061174c9068010000000000000000900467ffffffffffffffff1684612540565b611756919061257d565b60fd546040517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810185905291925073ffffffffffffffffffffffffffffffffffffffff16906323b872dd906064016020604051808303816000875af11580156117d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117f891906125b8565b5060fe546040517f40c10f190000000000000000000000000000000000000000000000000000000081523360048201526024810183905273ffffffffffffffffffffffffffffffffffffffff909116906340c10f1990604401600060405180830381600087803b15801561186b57600080fd5b505af115801561187f573d6000803e3d6000fd5b505060fb54604080513380825260208201889052918101869052606081019290925242608083015292507f249b692ff3a1553daecb2b56a807466cab98a0acdca470f0d18c1064e89b5732915060a001610804565b600082815260c960205260409020600101546118f081336118fa565b610bdb8383611ac0565b600082815260c96020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff16610c8f576119528173ffffffffffffffffffffffffffffffffffffffff166014611daf565b61195d836020611daf565b60405160200161196e92919061261f565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f08c379a0000000000000000000000000000000000000000000000000000000008252610906916004016126a0565b600082815260c96020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff16610c8f57600082815260c96020908152604080832073ffffffffffffffffffffffffffffffffffffffff85168452909152902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055611a623390565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b600082815260c96020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff1615610c8f57600082815260c96020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516808552925280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b7fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e610c8f81336118fa565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615611bd957610bdb83611ff9565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611c5e575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252611c5b918101906125da565b60015b611cea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608401610906565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8114611d99576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c655555494400000000000000000000000000000000000000000000006064820152608401610906565b50610bdb838383612103565b610c8f82826119cc565b60606000611dbe836002612540565b611dc99060026126f1565b67ffffffffffffffff811115611de157611de1612402565b6040519080825280601f01601f191660200182016040528015611e0b576020820181803683370190505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110611e4257611e42612709565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110611ea557611ea5612709565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506000611ee1846002612540565b611eec9060016126f1565b90505b6001811115611f89577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110611f2d57611f2d612709565b1a60f81b828281518110611f4357611f43612709565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c93611f8281612738565b9050611eef565b508315611ff2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610906565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff81163b61209d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152608401610906565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b61210c8361212e565b6000825111806121195750805b15610bdb57612128838361217b565b50505050565b61213781611ff9565b60405173ffffffffffffffffffffffffffffffffffffffff8216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b606073ffffffffffffffffffffffffffffffffffffffff83163b612221576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e747261637400000000000000000000000000000000000000000000000000006064820152608401610906565b6000808473ffffffffffffffffffffffffffffffffffffffff1684604051612249919061276d565b600060405180830381855af49150503d8060008114612284576040519150601f19603f3d011682016040523d82523d6000602084013e612289565b606091505b50915091506122b1828260405180606001604052806027815260200161278a602791396122ba565b95945050505050565b606083156122c9575081611ff2565b8251156122d95782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090691906126a0565b60006020828403121561231f57600080fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114611ff257600080fd5b60006020828403121561236157600080fd5b5035919050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461238c57600080fd5b919050565b600080604083850312156123a457600080fd5b823591506123b460208401612368565b90509250929050565b6000602082840312156123cf57600080fd5b611ff282612368565b600080604083850312156123eb57600080fd5b6123f483612368565b91506123b460208401612368565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000806040838503121561244457600080fd5b61244d83612368565b9150602083013567ffffffffffffffff8082111561246a57600080fd5b818501915085601f83011261247e57600080fd5b81358181111561249057612490612402565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156124d6576124d6612402565b816040528281528860208487010111156124ef57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561257857612578612511565b500290565b6000826125b3577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b6000602082840312156125ca57600080fd5b81518015158114611ff257600080fd5b6000602082840312156125ec57600080fd5b5051919050565b60005b8381101561260e5781810151838201526020016125f6565b838111156121285750506000910152565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516126578160178501602088016125f3565b7f206973206d697373696e6720726f6c652000000000000000000000000000000060179184019182015283516126948160288401602088016125f3565b01602801949350505050565b60208152600082518060208401526126bf8160408501602087016125f3565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b6000821982111561270457612704612511565b500190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008161274757612747612511565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b6000825161277f8184602087016125f3565b919091019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212201248ac082ef5a5f4e98dbb9d45cdb207d1416c4d547c5447bdd0185243b1faa164736f6c634300080b0033";

type SevenDotsTreasuryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SevenDotsTreasuryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SevenDotsTreasury__factory extends ContractFactory {
  constructor(...args: SevenDotsTreasuryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "SevenDotsTreasury";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SevenDotsTreasury> {
    return super.deploy(overrides || {}) as Promise<SevenDotsTreasury>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SevenDotsTreasury {
    return super.attach(address) as SevenDotsTreasury;
  }
  connect(signer: Signer): SevenDotsTreasury__factory {
    return super.connect(signer) as SevenDotsTreasury__factory;
  }
  static readonly contractName: "SevenDotsTreasury";
  public readonly contractName: "SevenDotsTreasury";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SevenDotsTreasuryInterface {
    return new utils.Interface(_abi) as SevenDotsTreasuryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SevenDotsTreasury {
    return new Contract(address, _abi, signerOrProvider) as SevenDotsTreasury;
  }
}
