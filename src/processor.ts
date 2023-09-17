import { bubblegum } from "./processors";

connect();
async function connect() {
  console.log("Starting listeners...");
  bubblegum();
}
