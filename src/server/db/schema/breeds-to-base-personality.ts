import { breeds } from "./breeds";
import { basePersonality } from "./base_personality";
import { pgTableCreator, integer } from "drizzle-orm/pg-core";
import { env } from "~/env";

const createTable = pgTableCreator((name) => `${env.TABLE_PREFIX}${name}`);

export const breedsToBasePersonality = createTable(
  "breeds_to_base_personality",
  {
    breedId: integer("breed_id")
      .notNull()
      .references(() => breeds.id),
    basePersonalityId: integer("base_personality_id")
      .notNull()
      .references(() => basePersonality.id),
  },
);
