const BasExpiredOwnershipJson = {
  "contractName": "BasExpiredOwnership",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "rel",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor",
      "signature": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "nameHash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "Add",
      "type": "event",
      "signature": "0x5f17f6377b8024fbe396282bbccde46c3c704613385bd2f4b4b3ff955fd56a35"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "nameHash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "time",
          "type": "uint256"
        }
      ],
      "name": "Extend",
      "type": "event",
      "signature": "0xe898863b26adf3af54e82709ac1a76136eaaa5f3a7d9b790ce6d539d508e75ff"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "nameHash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "Takeover",
      "type": "event",
      "signature": "0xae53ff61a227b196db64e2dea26e80d455bb2d90fd10372db78b44ace9cb0f62"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "nameHash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "Update",
      "type": "event",
      "signature": "0xb2b848c23b147f2d3c11308c74cb0ff81a30b54628e5c73c4d70bf623eb98f72"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "newDao",
          "type": "address"
        }
      ],
      "name": "ChangeDAO",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x8a42876b"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "DAOAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xd392eab1"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "assetsCountsOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x8549ddd1"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "start",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "end",
          "type": "uint256"
        }
      ],
      "name": "assetsOf",
      "outputs": [
        {
          "internalType": "bytes32[]",
          "name": "",
          "type": "bytes32[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xd2a03b51"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "new_rel",
          "type": "address"
        }
      ],
      "name": "changeRelation",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x57b29ef4"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "nameHash",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "extend",
          "type": "uint256"
        }
      ],
      "name": "extendTime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xc3f7beda"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "nameHash",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "expire",
          "type": "uint256"
        }
      ],
      "name": "newOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x4f9a1fbb"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "nameHash",
          "type": "bytes32"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x7dd56411"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "nameHash",
          "type": "bytes32"
        }
      ],
      "name": "ownerOfWithExpire",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x33eeb127"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "rel",
      "outputs": [
        {
          "internalType": "contract BasRelations",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xce26e78a"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "nameHash",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "expire",
          "type": "uint256"
        }
      ],
      "name": "takeover",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xb9566b10"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "nameHash",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "expire",
          "type": "uint256"
        }
      ],
      "name": "updateByDaoProposal",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x18eb3a50"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50604051611c63380380611c638339818101604052602081101561003357600080fd5b810190808051906020019092919050505080336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050611b8c806100d76000396000f3fe608060405234801561001057600080fd5b50600436106100d1576000357c0100000000000000000000000000000000000000000000000000000000900480638a42876b1161008e5780638a42876b146102cb578063b9566b101461030f578063c3f7beda14610367578063ce26e78a146103b3578063d2a03b51146103fd578063d392eab11461048a576100d1565b806318eb3a50146100d657806333eeb1271461012e5780634f9a1fbb146101a357806357b29ef4146101fb5780637dd564111461023f5780638549ddd1146102ad575b600080fd5b61012c600480360360608110156100ec57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506104d4565b005b61015a6004803603602081101561014457600080fd5b8101908080359060200190929190505050610781565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390f35b6101f9600480360360608110156101b957600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610820565b005b61023d6004803603602081101561021157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c4e565b005b61026b6004803603602081101561025557600080fd5b8101908080359060200190929190505050610d55565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102b5610d95565b6040518082815260200191505060405180910390f35b61030d600480360360208110156102e157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610de3565b005b6103656004803603606081101561032557600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ee8565b005b61039d6004803603604081101561037d57600080fd5b810190808035906020019092919080359060200190929190505050611340565b6040518082815260200191505060405180910390f35b6103bb611669565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104336004803603604081101561041357600080fd5b81019080803590602001909291908035906020019092919050505061168f565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561047657808201518184015260208101905061045b565b505050509050019250505060405180910390f35b6104926116ec565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610596576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600a8152602001807f61646d696e206f6e6c790000000000000000000000000000000000000000000081525060200191505060405180910390fd5b600060026000858152602001908152602001600020905061062284600360008460000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061171190919063ffffffff16565b61067384600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061171190919063ffffffff16565b6106c484600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061173990919063ffffffff16565b828160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508181600101819055507fb2b848c23b147f2d3c11308c74cb0ff81a30b54628e5c73c4d70bf623eb98f728484604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a150505050565b60008061078c611b27565b600260008581526020019081526020016000206040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815250509050806000015181602001519250925050915091565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ad9ecd0f30336040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b15801561090f57600080fd5b505afa158015610923573d6000803e3d6000fd5b505050506040513d602081101561093957600080fd5b81019080805190602001909291905050506109bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f6e6f7420616c6c6f77656420746f206d6f64696679000000000000000000000081525060200191505060405180910390fd5b826109c5611b27565b600260008381526020019081526020016000206040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815250509050600073ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff161480610a875750428160200151105b610af9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260098152602001807f6e6f742076616c6964000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b60405180604001604052808573ffffffffffffffffffffffffffffffffffffffff168152602001848152506002600087815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010155905050610bdc85600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061173990919063ffffffff16565b7f5f17f6377b8024fbe396282bbccde46c3c704613385bd2f4b4b3ff955fd56a358585604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a15050505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610d11576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6e6f74206163636570746564000000000000000000000000000000000000000081525060200191505060405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60006002600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610dde600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206117ec565b905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ea5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600a8152602001807f61646d696e206f6e6c790000000000000000000000000000000000000000000081525060200191505060405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ad9ecd0f30336040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b158015610fd757600080fd5b505afa158015610feb573d6000803e3d6000fd5b505050506040513d602081101561100157600080fd5b8101908080519060200190929190505050611084576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f6e6f7420616c6c6f77656420746f206d6f64696679000000000000000000000081525060200191505060405180910390fd5b8261108d611b27565b600260008381526020019081526020016000206040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815250509050600073ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff16148061114f5750428160200151105b6111c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260098152602001807f6e6f742076616c6964000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b60006002600087815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506112078186886117fd565b60405180604001604052808673ffffffffffffffffffffffffffffffffffffffff168152602001858152506002600088815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101559050507fae53ff61a227b196db64e2dea26e80d455bb2d90fd10372db78b44ace9cb0f62868287604051808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a1505050505050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ad9ecd0f30336040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b15801561143157600080fd5b505afa158015611445573d6000803e3d6000fd5b505050506040513d602081101561145b57600080fd5b81019080805190602001909291905050506114de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f6e6f7420616c6c6f77656420746f206d6f64696679000000000000000000000081525060200191505060405180910390fd5b82600073ffffffffffffffffffffffffffffffffffffffff166002600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156115b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260088152602001807f6e6f206f776e657200000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b600060026000868152602001908152602001600020905042816001015410156115fb576115ee84426118a490919063ffffffff16565b816001018190555061161b565b6116128482600101546118a490919063ffffffff16565b81600101819055505b7fe898863b26adf3af54e82709ac1a76136eaaa5f3a7d9b790ce6d539d508e75ff8585604051808381526020018281526020019250505060405180910390a180600101549250505092915050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60606116e48383600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206118c39092919063ffffffff16565b905092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008061171e8484611a01565b915091508115611733576117328482611a67565b5b50505050565b600082600001600083815260200190815260200160002054905060008360010180549050148061178f575060008114801561178e5750818360010160008154811061178057fe5b906000526020600020015414155b5b61179857600080fd5b82600101805490508360000160008481526020019081526020016000208190555082600101829080600181540180825580915050906001820390600052602060002001600090919290919091505550505050565b600081600101805490509050919050565b61184e81600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061171190919063ffffffff16565b61189f81600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061173990919063ffffffff16565b505050565b6000808284019050838110156118b957600080fd5b8091505092915050565b60606000821415611928578360010180548060200260200160405190810160405280929190818152602001828054801561191c57602002820191906000526020600020905b815481526020019060010190808311611908575b505050505090506119fa565b818310611933578192505b60608383036040519080825280602002602001820160405280156119665781602001602082028038833980820191505090505b50905060008090506000866001018054905090505b8482870110156119f3578082870110156119c85786600101828701815481106119a057fe5b90600052602060002001548383815181106119b757fe5b6020026020010181815250506119e6565b60006001028383815181106119d957fe5b6020026020010181815250505b818060010192505061197b565b8293505050505b9392505050565b60008060008460000160008581526020019081526020016000205490508085600101805490501115611a545783856001018281548110611a3d57fe5b906000526020600020015414819250925050611a60565b60008080905092509250505b9250929050565b600082600101600184600101805490500381548110611a8257fe5b906000526020600020015490506000836001018381548110611aa057fe5b9060005260206000200154905081846001018481548110611abd57fe5b906000526020600020018190555082846000016000848152602001908152602001600020819055508360000160008281526020019081526020016000206000905583600101805480611b0b57fe5b6001900381819060005260206000200160009055905550505050565b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152509056fea265627a7a72315820e042ab4db103f1cbbd123f07ba8d4cc95a88f73c2b67d2eb83c2b25da6eac3e264736f6c634300050c0032",
  "networks": {
    "1337": {
      "address": "0xDEeF52e1c6Da66Fd2E78FFC03fBD86bfB6b4bE76"
    }
  }
};
