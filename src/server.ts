import { Hono } from "hono";
import { register, getPlayer } from "./handlers";
const app = new Hono();

app.get("/", (c) => c.text("Hono!"));

app.post("/register", async (c) => await register(c));
app.get("/player/:wallet", async (c) => await getPlayer(c));

export default app;
