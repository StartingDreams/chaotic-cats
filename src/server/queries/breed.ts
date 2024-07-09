import "server-only";
import { db } from "~/server/db";

export async function getBreeds() {
  return await db.query.breed.findMany({
    with: {
      image: true,
      basePersonality: true,
      baseStats: true,
    },
  });
}
