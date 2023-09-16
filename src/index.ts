import { Hono } from "hono";
import { register } from "./handlers";
const app = new Hono();

app.get("/", (c) => c.text("Hono!"));

app.post("/register", async (c) => await register(c));

export default app;
