import {
  pgTableCreator,
  serial,
  timestamp,
  integer,
  boolean,
  varchar,
} from "drizzle-orm/pg-core";
import { env } from "~/env";

const createTable = pgTableCreator((name) => `${env.TABLE_PREFIX}${name}`);

export const basePersonality = createTable("base_personality", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 50 }).notNull(),
  charm: integer("charm").notNull(),
  affection: integer("affection").notNull(),
  friendliness: integer("friendliness").notNull(),
  cautiousness: integer("cautiousness").notNull(),
  aggression: integer("aggression").notNull(),
  dominance: integer("dominance").notNull(),
  enabled: boolean("enabled").default(false).notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  deletedAt: timestamp("deletedAt"),
});
