import * as bip39 from "bip39";
import * as bip32 from "bip32";
import { bech32 } from "bech32";
import { ECPairFactory } from "ecpair";
import * as TinySecp256k1 from "tiny-secp256k1";

const ECPair = ECPairFactory(TinySecp256k1);

const MNEMONIC =
  "hub fatigue black gift believe final fine patrol unaware frozen business buyer educate leave bike festival grief much barrel retreat arrange govern exotic flee";

const PATH = "m/44'/118'/0'/0/0";

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
    compressed: false,
  });
  console.log("ecpair.privatekey", ecpair.privateKey!.toString("hex"));

  const words = bech32.toWords(child.identifier);
  console.log("words", words);

  const result = bech32.encode(PREFIX, words);
  console.log("result", result);
}

main();
