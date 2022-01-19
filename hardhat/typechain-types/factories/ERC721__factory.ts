/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721, ERC721Interface } from "../ERC721";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002777380380620027778339818101604052810190620000379190620002be565b81600090805190602001906200004f92919062000071565b5080600190805190602001906200006892919062000071565b505050620003a8565b8280546200007f9062000372565b90600052602060002090601f016020900481019282620000a35760008555620000ef565b82601f10620000be57805160ff1916838001178555620000ef565b82800160010185558215620000ef579182015b82811115620000ee578251825591602001919060010190620000d1565b5b509050620000fe919062000102565b5090565b5b808211156200011d57600081600090555060010162000103565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200018a826200013f565b810181811067ffffffffffffffff82111715620001ac57620001ab62000150565b5b80604052505050565b6000620001c162000121565b9050620001cf82826200017f565b919050565b600067ffffffffffffffff821115620001f257620001f162000150565b5b620001fd826200013f565b9050602081019050919050565b60005b838110156200022a5780820151818401526020810190506200020d565b838111156200023a576000848401525b50505050565b6000620002576200025184620001d4565b620001b5565b9050828152602081018484840111156200027657620002756200013a565b5b620002838482856200020a565b509392505050565b600082601f830112620002a357620002a262000135565b5b8151620002b584826020860162000240565b91505092915050565b60008060408385031215620002d857620002d76200012b565b5b600083015167ffffffffffffffff811115620002f957620002f862000130565b5b62000307858286016200028b565b925050602083015167ffffffffffffffff8111156200032b576200032a62000130565b5b62000339858286016200028b565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200038b57607f821691505b60208210811415620003a257620003a162000343565b5b50919050565b6123bf80620003b86000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb46514610224578063b88d4fde14610240578063c87b56dd1461025c578063e985e9c51461028c576100cf565b80636352211e146101a657806370a08231146101d657806395d89b4114610206576100cf565b806301ffc9a7146100d457806306fdde0314610104578063081812fc14610122578063095ea7b31461015257806323b872dd1461016e57806342842e0e1461018a575b600080fd5b6100ee60048036038101906100e9919061141a565b6102bc565b6040516100fb9190611462565b60405180910390f35b61010c61039e565b6040516101199190611516565b60405180910390f35b61013c6004803603810190610137919061156e565b610430565b60405161014991906115dc565b60405180910390f35b61016c60048036038101906101679190611623565b6104b5565b005b61018860048036038101906101839190611663565b6105cd565b005b6101a4600480360381019061019f9190611663565b61062d565b005b6101c060048036038101906101bb919061156e565b61064d565b6040516101cd91906115dc565b60405180910390f35b6101f060048036038101906101eb91906116b6565b6106ff565b6040516101fd91906116f2565b60405180910390f35b61020e6107b7565b60405161021b9190611516565b60405180910390f35b61023e60048036038101906102399190611739565b610849565b005b61025a600480360381019061025591906118ae565b61085f565b005b6102766004803603810190610271919061156e565b6108c1565b6040516102839190611516565b60405180910390f35b6102a660048036038101906102a19190611931565b610968565b6040516102b39190611462565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061038757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103975750610396826109fc565b5b9050919050565b6060600080546103ad906119a0565b80601f01602080910402602001604051908101604052809291908181526020018280546103d9906119a0565b80156104265780601f106103fb57610100808354040283529160200191610426565b820191906000526020600020905b81548152906001019060200180831161040957829003601f168201915b5050505050905090565b600061043b82610a66565b61047a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047190611a44565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104c08261064d565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610531576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052890611ad6565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610550610ad2565b73ffffffffffffffffffffffffffffffffffffffff16148061057f575061057e81610579610ad2565b610968565b5b6105be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b590611b68565b60405180910390fd5b6105c88383610ada565b505050565b6105de6105d8610ad2565b82610b93565b61061d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061490611bfa565b60405180910390fd5b610628838383610c71565b505050565b6106488383836040518060200160405280600081525061085f565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156106f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ed90611c8c565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610770576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076790611d1e565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600180546107c6906119a0565b80601f01602080910402602001604051908101604052809291908181526020018280546107f2906119a0565b801561083f5780601f106108145761010080835404028352916020019161083f565b820191906000526020600020905b81548152906001019060200180831161082257829003601f168201915b5050505050905090565b61085b610854610ad2565b8383610ecd565b5050565b61087061086a610ad2565b83610b93565b6108af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a690611bfa565b60405180910390fd5b6108bb8484848461103a565b50505050565b60606108cc82610a66565b61090b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090290611db0565b60405180910390fd5b6000610915611096565b905060008151116109355760405180602001604052806000815250610960565b8061093f846110ad565b604051602001610950929190611e0c565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610b4d8361064d565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610b9e82610a66565b610bdd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd490611ea2565b60405180910390fd5b6000610be88361064d565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610c5757508373ffffffffffffffffffffffffffffffffffffffff16610c3f84610430565b73ffffffffffffffffffffffffffffffffffffffff16145b80610c685750610c678185610968565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610c918261064d565b73ffffffffffffffffffffffffffffffffffffffff1614610ce7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cde90611f34565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d57576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d4e90611fc6565b60405180910390fd5b610d6283838361120e565b610d6d600082610ada565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610dbd9190612015565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e149190612049565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610f3c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f33906120eb565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161102d9190611462565b60405180910390a3505050565b611045848484610c71565b61105184848484611213565b611090576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110879061217d565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606060008214156110f5576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611209565b600082905060005b600082146111275780806111109061219d565b915050600a826111209190612215565b91506110fd565b60008167ffffffffffffffff81111561114357611142611783565b5b6040519080825280601f01601f1916602001820160405280156111755781602001600182028036833780820191505090505b5090505b600085146112025760018261118e9190612015565b9150600a8561119d9190612246565b60306111a99190612049565b60f81b8183815181106111bf576111be612277565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856111fb9190612215565b9450611179565b8093505050505b919050565b505050565b60006112348473ffffffffffffffffffffffffffffffffffffffff1661139b565b1561138e578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261125d610ad2565b8786866040518563ffffffff1660e01b815260040161127f94939291906122fb565b6020604051808303816000875af19250505080156112bb57506040513d601f19601f820116820180604052508101906112b8919061235c565b60015b61133e573d80600081146112eb576040519150601f19603f3d011682016040523d82523d6000602084013e6112f0565b606091505b50600081511415611336576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161132d9061217d565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611393565b600190505b949350505050565b600080823b905060008111915050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6113f7816113c2565b811461140257600080fd5b50565b600081359050611414816113ee565b92915050565b6000602082840312156114305761142f6113b8565b5b600061143e84828501611405565b91505092915050565b60008115159050919050565b61145c81611447565b82525050565b60006020820190506114776000830184611453565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156114b757808201518184015260208101905061149c565b838111156114c6576000848401525b50505050565b6000601f19601f8301169050919050565b60006114e88261147d565b6114f28185611488565b9350611502818560208601611499565b61150b816114cc565b840191505092915050565b6000602082019050818103600083015261153081846114dd565b905092915050565b6000819050919050565b61154b81611538565b811461155657600080fd5b50565b60008135905061156881611542565b92915050565b600060208284031215611584576115836113b8565b5b600061159284828501611559565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006115c68261159b565b9050919050565b6115d6816115bb565b82525050565b60006020820190506115f160008301846115cd565b92915050565b611600816115bb565b811461160b57600080fd5b50565b60008135905061161d816115f7565b92915050565b6000806040838503121561163a576116396113b8565b5b60006116488582860161160e565b925050602061165985828601611559565b9150509250929050565b60008060006060848603121561167c5761167b6113b8565b5b600061168a8682870161160e565b935050602061169b8682870161160e565b92505060406116ac86828701611559565b9150509250925092565b6000602082840312156116cc576116cb6113b8565b5b60006116da8482850161160e565b91505092915050565b6116ec81611538565b82525050565b600060208201905061170760008301846116e3565b92915050565b61171681611447565b811461172157600080fd5b50565b6000813590506117338161170d565b92915050565b600080604083850312156117505761174f6113b8565b5b600061175e8582860161160e565b925050602061176f85828601611724565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6117bb826114cc565b810181811067ffffffffffffffff821117156117da576117d9611783565b5b80604052505050565b60006117ed6113ae565b90506117f982826117b2565b919050565b600067ffffffffffffffff82111561181957611818611783565b5b611822826114cc565b9050602081019050919050565b82818337600083830152505050565b600061185161184c846117fe565b6117e3565b90508281526020810184848401111561186d5761186c61177e565b5b61187884828561182f565b509392505050565b600082601f83011261189557611894611779565b5b81356118a584826020860161183e565b91505092915050565b600080600080608085870312156118c8576118c76113b8565b5b60006118d68782880161160e565b94505060206118e78782880161160e565b93505060406118f887828801611559565b925050606085013567ffffffffffffffff811115611919576119186113bd565b5b61192587828801611880565b91505092959194509250565b60008060408385031215611948576119476113b8565b5b60006119568582860161160e565b92505060206119678582860161160e565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806119b857607f821691505b602082108114156119cc576119cb611971565b5b50919050565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000611a2e602c83611488565b9150611a39826119d2565b604082019050919050565b60006020820190508181036000830152611a5d81611a21565b9050919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000611ac0602183611488565b9150611acb82611a64565b604082019050919050565b60006020820190508181036000830152611aef81611ab3565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b6000611b52603883611488565b9150611b5d82611af6565b604082019050919050565b60006020820190508181036000830152611b8181611b45565b9050919050565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b6000611be4603183611488565b9150611bef82611b88565b604082019050919050565b60006020820190508181036000830152611c1381611bd7565b9050919050565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b6000611c76602983611488565b9150611c8182611c1a565b604082019050919050565b60006020820190508181036000830152611ca581611c69565b9050919050565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b6000611d08602a83611488565b9150611d1382611cac565b604082019050919050565b60006020820190508181036000830152611d3781611cfb565b9050919050565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b6000611d9a602f83611488565b9150611da582611d3e565b604082019050919050565b60006020820190508181036000830152611dc981611d8d565b9050919050565b600081905092915050565b6000611de68261147d565b611df08185611dd0565b9350611e00818560208601611499565b80840191505092915050565b6000611e188285611ddb565b9150611e248284611ddb565b91508190509392505050565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000611e8c602c83611488565b9150611e9782611e30565b604082019050919050565b60006020820190508181036000830152611ebb81611e7f565b9050919050565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b6000611f1e602983611488565b9150611f2982611ec2565b604082019050919050565b60006020820190508181036000830152611f4d81611f11565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611fb0602483611488565b9150611fbb82611f54565b604082019050919050565b60006020820190508181036000830152611fdf81611fa3565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061202082611538565b915061202b83611538565b92508282101561203e5761203d611fe6565b5b828203905092915050565b600061205482611538565b915061205f83611538565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561209457612093611fe6565b5b828201905092915050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b60006120d5601983611488565b91506120e08261209f565b602082019050919050565b60006020820190508181036000830152612104816120c8565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612167603283611488565b91506121728261210b565b604082019050919050565b600060208201905081810360008301526121968161215a565b9050919050565b60006121a882611538565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156121db576121da611fe6565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061222082611538565b915061222b83611538565b92508261223b5761223a6121e6565b5b828204905092915050565b600061225182611538565b915061225c83611538565b92508261226c5761226b6121e6565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050919050565b600082825260208201905092915050565b60006122cd826122a6565b6122d781856122b1565b93506122e7818560208601611499565b6122f0816114cc565b840191505092915050565b600060808201905061231060008301876115cd565b61231d60208301866115cd565b61232a60408301856116e3565b818103606083015261233c81846122c2565b905095945050505050565b600081519050612356816113ee565b92915050565b600060208284031215612372576123716113b8565b5b600061238084828501612347565b9150509291505056fea2646970667358221220b8a05b6ce1611f37e94d411fcdb7ebc47171343f90e93fc678261c7df2538bd364736f6c634300080b0033";

type ERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721__factory extends ContractFactory {
  constructor(...args: ERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC721";
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }
  static readonly contractName: "ERC721";
  public readonly contractName: "ERC721";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721Interface {
    return new utils.Interface(_abi) as ERC721Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}
