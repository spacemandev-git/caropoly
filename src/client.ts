import { Command } from "commander";
import { Keypair } from "@solana/web3.js";

const cli = new Command();

const API = "http://localhost:3000";

cli.name("Caropoly Client").version("0.1.0");

cli
  .command("register")
  .description("Register a wallet keypair with the game")
  .argument("<wallet>", "filepath to wallet")
  .action(async (wallet) => {
    const kp = await Bun.file(wallet).json();
    const keypair = Keypair.fromSecretKey(Uint8Array.from(kp));
    console.log("Registering Keypair: ", keypair.publicKey.toString());
    const response = await fetch(new Request(API + "/register"), {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        wallet: keypair.publicKey.toString(),
      }),
    });

    console.log(await response.json());
  });

cli
  .command("player")
  .description("Get information about a player")
  .argument("<wallet>", "filepath to wallet")
  .action(async (wallet) => {
    const kp = await Bun.file(wallet).json();
    const keypair = Keypair.fromSecretKey(Uint8Array.from(kp));

    const response = await fetch(
      new Request(API + "/player/" + keypair.publicKey.toString()),
      {
        method: "get",
      }
    );

    console.log(await response.json());
  });

cli.parse();
