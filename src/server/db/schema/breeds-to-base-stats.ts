import { breeds } from "./breeds";
import { baseStats } from "./base_stats";
import { pgTableCreator, integer } from "drizzle-orm/pg-core";
import { env } from "~/env";

const createTable = pgTableCreator((name) => `${env.TABLE_PREFIX}${name}`);

export const breedsToBaseStats = createTable("breeds_to_base_stats", {
  breedId: integer("breed_id")
    .notNull()
    .references(() => breeds.id),
  baseStatsId: integer("base_stats_id")
    .notNull()
    .references(() => baseStats.id),
});
