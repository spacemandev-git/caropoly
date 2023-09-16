import { Context } from "hono";

export async function register(ctx: Context) {
  try {
    throw new Error("Something went wrong!");
  } catch (e: any) {
    console.error(e);
    return new Response(JSON.stringify({ error: e.message || e }), {
      status: 500,
    });
  }
}
