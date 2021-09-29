import * as bip39 from "bip39";
import * as bip32 from "bip32";
import { bech32 } from "bech32";

const MNEMONIC =
  "educate vapor cool car judge speed pulp achieve spread buffalo snow paddle edit airport float roast plug swing empower clap cost forum add mouse";

const PATH = "44/118/0/0/0";

const PREFIX = "cosmos";

function main() {
  //   const mnemonic = bip39.generateMnemonic(256);
  const mnemonic = MNEMONIC;
  console.log("mnemonic", mnemonic);

  const seed = bip39.mnemonicToSeedSync(mnemonic, "321");
  console.log("seed", seed.buffer);

  const node = bip32.fromSeed(seed);
  console.log("node", node);

  const child = node.derivePath(PATH);
  console.log("child", child);

  const words = bech32.toWords(child.identifier);
  console.log("words", words);

  const result = bech32.encode(PREFIX, words);
  console.log("result", result);
}

main();
