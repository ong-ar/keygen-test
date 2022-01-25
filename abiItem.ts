import type { AbiItem } from "web3-utils";

export const item: AbiItem[] = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_gravityId",
        type: "bytes32",
      },
      {
        internalType: "address[]",
        name: "_validators",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_powers",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "_cosmosDenom",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_tokenContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_eventNonce",
        type: "uint256",
      },
    ],
    name: "ERC20DeployedEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "_invalidationId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_invalidationNonce",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_returnData",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_eventNonce",
        type: "uint256",
      },
    ],
    name: "LogicCallEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_tokenContract",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_destination",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_eventNonce",
        type: "uint256",
      },
    ],
    name: "SendToCosmosEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_batchNonce",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_eventNonce",
        type: "uint256",
      },
    ],
    name: "TransactionBatchExecutedEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_newValsetNonce",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_eventNonce",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_rewardAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_rewardToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "_validators",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_powers",
        type: "uint256[]",
      },
    ],
    name: "ValsetUpdatedEvent",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_cosmosDenom",
        type: "string",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
    ],
    name: "deployERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_erc20Address",
        type: "address",
      },
    ],
    name: "lastBatchNonce",
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
        name: "_invalidation_id",
        type: "bytes32",
      },
    ],
    name: "lastLogicCallNonce",
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
        name: "_tokenContract",
        type: "address",
      },
      {
        internalType: "string",
        name: "_destination",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "sendToCosmos",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "state_gravityId",
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
        name: "",
        type: "bytes32",
      },
    ],
    name: "state_invalidationMapping",
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
        name: "",
        type: "address",
      },
    ],
    name: "state_lastBatchNonces",
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
    name: "state_lastEventNonce",
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
    name: "state_lastValsetCheckpoint",
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
    name: "state_lastValsetNonce",
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
        components: [
          {
            internalType: "address[]",
            name: "validators",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "powers",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "valsetNonce",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rewardAmount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "rewardToken",
            type: "address",
          },
        ],
        internalType: "struct ValsetArgs",
        name: "_currentValset",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct Signature[]",
        name: "_sigs",
        type: "tuple[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "_destinations",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_fees",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "_batchNonce",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_tokenContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_batchTimeout",
        type: "uint256",
      },
    ],
    name: "submitBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address[]",
            name: "validators",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "powers",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "valsetNonce",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rewardAmount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "rewardToken",
            type: "address",
          },
        ],
        internalType: "struct ValsetArgs",
        name: "_currentValset",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct Signature[]",
        name: "_sigs",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "uint256[]",
            name: "transferAmounts",
            type: "uint256[]",
          },
          {
            internalType: "address[]",
            name: "transferTokenContracts",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "feeAmounts",
            type: "uint256[]",
          },
          {
            internalType: "address[]",
            name: "feeTokenContracts",
            type: "address[]",
          },
          {
            internalType: "address",
            name: "logicContractAddress",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "payload",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "timeOut",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "invalidationId",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "invalidationNonce",
            type: "uint256",
          },
        ],
        internalType: "struct LogicCallArgs",
        name: "_args",
        type: "tuple",
      },
    ],
    name: "submitLogicCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address[]",
            name: "validators",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "powers",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "valsetNonce",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rewardAmount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "rewardToken",
            type: "address",
          },
        ],
        internalType: "struct ValsetArgs",
        name: "_currentValset",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct Signature[]",
        name: "_sigs",
        type: "tuple[]",
      },
      {
        internalType: "bytes32",
        name: "_theHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_powerThreshold",
        type: "uint256",
      },
    ],
    name: "testCheckValidatorSignatures",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address[]",
            name: "validators",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "powers",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "valsetNonce",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rewardAmount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "rewardToken",
            type: "address",
          },
        ],
        internalType: "struct ValsetArgs",
        name: "_valsetArgs",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "_gravityId",
        type: "bytes32",
      },
    ],
    name: "testMakeCheckpoint",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address[]",
            name: "validators",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "powers",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "valsetNonce",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rewardAmount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "rewardToken",
            type: "address",
          },
        ],
        internalType: "struct ValsetArgs",
        name: "_newValset",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address[]",
            name: "validators",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "powers",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "valsetNonce",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rewardAmount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "rewardToken",
            type: "address",
          },
        ],
        internalType: "struct ValsetArgs",
        name: "_currentValset",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct Signature[]",
        name: "_sigs",
        type: "tuple[]",
      },
    ],
    name: "updateValset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
