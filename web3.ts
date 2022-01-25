import Web3 from "web3";
import { AbstractProvider } from "web3-core";
import { item } from "./abiItem";
import { ContractSendMethod } from "web3-eth-contract";
import Common from "@ethereumjs/common";

import { Transaction, TransactionFactory } from "@ethereumjs/tx";
import {
  ecsign,
  hashPersonalMessage,
  toRpcSig,
  stripHexPrefix,
} from "ethereumjs-util";
import { personalSign, concatSig } from "eth-sig-util";
import { keccak256, bufferToInt } from "ethereumjs-util";

type gravityBridgetContractMethods = {
  sendToCosmos: (
    erc20Address: string,
    gravityBridgeAddress: string,
    amount: string
  ) => ContractSendMethod;
  deployERC20: (
    cosmosDenom: string,
    tokenName: string,
    symbol: string,
    decimal: number
  ) => ContractSendMethod;
};

const provider: AbstractProvider = {
  sendAsync: () => {},
  request: async (args) => {
    if (args.method === "eth_sign") {
      return { ...args, a: "aaa" };
    }
    return args;
  },
};

const web3 = new Web3(
  //   new Web3.providers.HttpProvider("http://localhost:8545")
  provider
);

async function aaa() {
  //   const contract = new web3.eth.Contract(
  //     item,
  //     "0xa4108aa1ec4967f8b52220a4f7e94a8201f2d906"
  //   );
  //   const method = (
  //     contract.methods as gravityBridgetContractMethods
  //   ).sendToCosmos(
  //     "0xDdDf66022c8307222DC8a118F4DE97e131C17936",
  //     "gravity1lhhtz0qmf7zkgcmpa2mgkt7nf8njyluyr464zs",
  //     "10"
  //   );
  //   try {
  //     console.log(
  //       await method.send({ from: "0xDdDf66022c8307222DC8a118F4DE97e131C17936" })
  //     );
  //   } catch (e) {
  //     console.log(e);
  //   }

  //   const dddd = await web3.eth.personal.sign(
  //     "aaa",
  //     "0xDdDf66022c8307222DC8a118F4DE97e131C17936",
  //     ""
  //   );

  //   const common = new Common({ chain: 0x539 });

  const a = await web3.eth.signTransaction(
    {
      gasPrice: "0x9184e72a000",
      chainId: 0x539,
      gas: "0x5208",
      from: "0x6E387779Ed9d4578943556e4D58bF37a8DCEfA88",
      to: "0x6E387779Ed9d4578943556e4D58bF37a8DCEfA88",
      value: "0x1",
      data: "dddd",
    }
    // "2d7bdb58c65480ac5aee00b20d3558fb18a916810d298ed97174cc01bb809cdd"
  );
  //   web3.eth.accounts.sign();

  console.log(a);

  const bb = await web3.eth.sign(
    { data: "ddd" } as unknown as string,
    "0x6E387779Ed9d4578943556e4D58bF37a8DCEfA88"
  );

  console.log("bb", bb);

  console.log(
    web3.eth.accounts.sign(
      "0x3131313131313131313131313131313131313131313131313131313131313131",
      "0x2d7bdb58c65480ac5aee00b20d3558fb18a916810d298ed97174cc01bb809cdd"
    )
  );

  console.log(
    ecsign(
      hashPersonalMessage(Buffer.from("11111111111111111111111111111111")),
      Buffer.from(
        "2d7bdb58c65480ac5aee00b20d3558fb18a916810d298ed97174cc01bb809cdd",
        "hex"
      )
    )
  );

  const msg = stripHexPrefix(
    "0x3131313131313131313131313131313131313131313131313131313131313131"
  );
  const priv = Buffer.from(
    "2d7bdb58c65480ac5aee00b20d3558fb18a916810d298ed97174cc01bb809cdd",
    "hex"
  );

  const msgSig = ecsign(Buffer.from(msg, "hex"), priv);

  console.log(
    "aaaa",
    concatSig(msgSig.v as unknown as Buffer, msgSig.r, msgSig.s)
  );

  console.log("msgSig.v", msgSig.v, bufferToInt(msgSig.v as unknown as Buffer));

  const bab = ecsign(
    hashPersonalMessage(Buffer.from("11111111111111111111111111111111")),
    Buffer.from(
      "2d7bdb58c65480ac5aee00b20d3558fb18a916810d298ed97174cc01bb809cdd",
      "hex"
    )
  );

  console.log(toRpcSig(bab.v, bab.r, bab.s));

  console.log(
    keccak256(Buffer.from("11111111111111111111111111111111")).toString("hex")
  );

  console.log(
    "personalSign",
    personalSign(
      Buffer.from(
        "2d7bdb58c65480ac5aee00b20d3558fb18a916810d298ed97174cc01bb809cdd",
        "hex"
      ),
      {
        data: `\x19Ethereum Signed Message:\n32${keccak256(
          Buffer.from("11111111111111111111111111111111")
        ).toString("hex")}`,
      }
    )
  );

  console.log(
    await web3.eth.personal.sign(
      "11111111111111111111111111111111",
      "0x9575eB2a7804c43F68dC7998EB0f250832DF9f10",
      "ddd"
    )
  );

  console.log(
    Buffer.from(
      "3131313131313131313131313131313131313131313131313131313131313131",
      "hex"
    ).toString("utf8")
  );

  //   web3.eth.accounts.sign();
  // web3.eth.accounts.signTransaction(
  //   {
  //     gasPrice: "0x9184e72a000",
  //     chainId: 0x539,
  //     gas: "0x5208",
  //     from: "0x9575eB2a7804c43F68dC7998EB0f250832DF9f10",
  //     to: "0x6E387779Ed9d4578943556e4D58bF37a8DCEfA88",
  //     value: "0x1",
  //     data: "dddd",
  //   },
  //   "d"
  // );
  // console.log(bb);
  //   const txParams = {
  //     nonce: "0x00",
  //     chainId: 0x539,
  //     gasPrice: "0x9184e72a000",
  //     from: "0x9575eB2a7804c43F68dC7998EB0f250832DF9f10",
  //     to: "0x6E387779Ed9d4578943556e4D58bF37a8DCEfA88",
  //     value: "0x1",
  //   };

  //   const tx = new Transaction(txParams);
  //   tx.sign(
  //     Buffer.from(
  //       "2d7bdb58c65480ac5aee00b20d3558fb18a916810d298ed97174cc01bb809cdd",
  //       "hex"
  //     )
  //   );

  //   console.log(tx.serialize().toString("hex"));

  //   web3.eth.sendTransaction({});
  //   console.log(dddd);
}

aaa();
