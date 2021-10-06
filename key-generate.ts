import * as bip39 from "bip39";
import * as bip32 from "bip32";
import { bech32 } from "bech32";
import sha256 from "crypto-js/sha256";

const MNEMONIC =
  "hub fatigue black gift believe final fine patrol unaware frozen business buyer educate leave bike festival grief much barrel retreat arrange govern exotic flee";

const PATH = "m/44/118/0/0/0";

const PREFIX = "cosmos";

function main() {
  //   const mnemonic = bip39.generateMnemonic(256);
  const mnemonic = MNEMONIC;
  console.log("mnemonic", mnemonic);

  const seed = bip39.mnemonicToSeedSync(mnemonic);
  console.log("seed", seed.buffer);

  const node = bip32.fromSeed(seed);
  console.log("node", node);
  console.log("node.identifier", node.identifier);

  const child = node.derivePath(PATH);
  console.log("child", child);
  console.log("child", child.privateKey);
  console.log("child", child.publicKey);

  const words = bech32.toWords(child.identifier);
  console.log("words", words);

  const result = bech32.encode(PREFIX, words);
  console.log("result", result);

  console.log(
    sha256("1010110111011000110010010010111001001011001001010110001011100001")
  );
}

main();
