import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.text("Caropoly is live!"));

export default app;
