import { CARPOOL_URL } from "./constants";

export function bubblegum() {
  const ws = new WebSocket(CARPOOL_URL);
  ws.addEventListener("open", async (evt) => {
    console.log("Creating a stream for Bubblegum Messages...");
    // Send subscribe message
    ws.send(
      JSON.stringify({
        chain: "solana",
        programId: "BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY",
        level: "processed",
        type: "account",
        entityName: "*",
        apiKey: process.env.CARPOOL_KEY,
      })
    );
  });

  ws.addEventListener("close", async (evt) => {
    console.log("Bubblegum Close EVT: ", evt);
    console.log("Bubblegum socket closed, attempting reconnect in 1 second...");
    setTimeout(function () {
      bubblegum();
    }, 1000);
  });

  ws.addEventListener("error", async (evt) => {
    console.log("Bubblegum Error EVT: ", evt);
    console.log(
      "Bubblegum socket errored, attempting reconnect in 1 second..."
    );
    setTimeout(function () {
      bubblegum();
    }, 1000);
  });

  ws.addEventListener("message", async (evt) => {
    console.log(evt);
  });
}
