import { CARPOOL_URL } from "./constants";
import { io } from "socket.io-client";

export function bubblegum() {
  const socket = io(CARPOOL_URL, { transports: ["websocket"] });

  socket.on("connect", () => {
    console.log("Creating a stream for Bubblegum Messages...");
    // Send subscribe messages
    socket.emit("subscribe", {
      chain: "solana",
      programId: "BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY",
      level: "processed",
      type: "instruction", // "instruction" or "account" or "event"
      entityName: "*",
      apiKey: process.env.CARPOOL_KEY,
    });
  });

  socket.on("connect_error", (err) => {
    console.log(err.message);
    console.log(
      "Bubblegum socket errored, attempting reconnect in 1 second..."
    );
    setTimeout(() => {
      socket.connect();
    }, 1000);
  });

  socket.on("data", async (data) => {
    console.log(data);
  });
}
