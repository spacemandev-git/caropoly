import { Context } from "hono";
import { PrismaClient } from "../prisma";
const prisma = new PrismaClient();

const STARTING_RENT = 10_000;
export async function register(ctx: Context) {
  try {
    const { wallet } = await ctx.req.json();
    const newPlayer = await prisma.players.create({
      data: { wallet: wallet as string, rent: STARTING_RENT },
    });
    return ctx.json(newPlayer);
  } catch (e: any) {
    console.error(e);
    return new Response(JSON.stringify({ error: e.message || e }), {
      status: 500,
    });
  }
}

export async function getPlayer(ctx: Context) {
  try {
    const { wallet } = ctx.req.param();
    return ctx.json(
      await prisma.players.findUniqueOrThrow({ where: { wallet } })
    );
  } catch (e: any) {
    console.error(e);
    return new Response(JSON.stringify({ error: e.message || e }), {
      status: 500,
    });
  }
}
