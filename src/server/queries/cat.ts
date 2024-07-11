import "server-only";
import { auth } from "@clerk/nextjs/server";
import { db } from "~/server/db";

export async function getCatByUuid(catUuid: string) {
  // everyone can view all cats so we don't need to check permissions

  const cat = await db.query.cat.findFirst({
    where: (cat, { eq }) => eq(cat.uuid, catUuid),
    with: {
      image: true,
      breed: {
        with: {
          baseStats: true,
          basePersonality: true,
        },
      },
    },
  });

  return cat ?? null;
}

export async function getCats() {
  const { userId } = auth();

  if (!userId) {
    throw new Error("Unauthenticated user");
  }

  return await db.query.cat.findMany({
    with: {
      image: true,
      breed: {
        with: {
          baseStats: true,
          basePersonality: true,
        },
      },
    },
    where: (cat, { eq }) => eq(cat.userId, userId),
  });
}
