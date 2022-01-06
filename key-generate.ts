import * as bip39 from "bip39";
import BIP32Factory from "bip32";
import { bech32 } from "bech32";
import { ECPairFactory } from "ecpair";
import * as TinySecp256k1 from "tiny-secp256k1";
import { privateKeyVerify } from "secp256k1";
import keccak from "keccak";
import { publicKeyConvert } from "ethereum-cryptography/secp256k1";
import { publicKey } from "eth-crypto";
import { Address, toChecksumAddress } from "ethereumjs-util";

const ECPair = ECPairFactory(TinySecp256k1);

const bip32 = BIP32Factory(TinySecp256k1);

TinySecp256k1;

const MNEMONIC =
  "hub fatigue black gift believe final fine patrol unaware frozen business buyer educate leave bike festival grief much barrel retreat arrange govern exotic flee";

const PATH = "m/44'/60'/0'/0/0";

const PREFIX = "cosmos";

function main() {
  //   const mnemonic = bip39.generateMnemonic(256);
  const mnemonic = MNEMONIC;
  console.log("mnemonic", mnemonic);

  const seed = bip39.mnemonicToSeedSync(mnemonic);
  console.log("seed", seed.buffer);

  const node = bip32.fromSeed(seed);
  console.log("node", node);

  const child = node.derivePath(PATH);
  console.log("child", child);

  const ecpair = ECPair.fromPrivateKey(child.privateKey!, {
    compressed: true,
  });
  console.log(
    "child.publicKey 33",
    toChecksumAddress(
      Address.fromPublicKey(
        Buffer.from(
          TinySecp256k1.pointCompress(
            new Uint8Array(child.publicKey),
            false
          ).slice(1)
        )
      ).toString()
    )
  );

  console.log(publicKey.toAddress(child.publicKey.toString("hex")));
  console.log(
    "abc",
    TinySecp256k1.pointCompress(new Uint8Array(child.publicKey), false)
  );

  console.log(
    "keccak",
    keccak("keccak256")
      .update(child.publicKey.toString("hex"))
      .digest()
      .slice(-20)
      .toString("hex")
  );

  console.log("publicKeyConvert", publicKeyConvert(child.publicKey));
  console.log("child.privateKey", child.privateKey!.toString("hex"));
  console.log("ecpair.privatekey", ecpair.privateKey!.toString("hex"));
  console.log("ecpair.public", ecpair.publicKey!.toString("hex"));

  const words = bech32.toWords(child.identifier);
  console.log("words", words);

  const result = bech32.encode(PREFIX, words);
  console.log("result", result);

  console.log(
    privateKeyVerify(
      Buffer.from(
        "55d4c8e2dcc5a9f3c1d091e448a3b0d42cba339ada9fc7d46c74ab989f75f2b4",
        "hex"
      )
    )
  );
}

main();
