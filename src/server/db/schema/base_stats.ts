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

export const baseStats = createTable("base_stats", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 50 }).notNull(),
  strength: integer("strength").notNull(),
  mass: integer("mass").notNull(),
  dexterity: integer("dexterity").notNull(),
  speed: integer("speed").notNull(),
  toughness: integer("toughness").notNull(),
  endurance: integer("endurance").notNull(),
  knowledge: integer("knowledge").notNull(),
  learningEfficiency: integer("learning_efficiency").notNull(),
  creativity: integer("creativity").notNull(),
  wisdom: integer("wisdom").notNull(),
  willpower: integer("willpower").notNull(),
  mana: integer("mana").notNull(),
  potency: integer("potency").notNull(),
  enabled: boolean("enabled").default(false).notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  deletedAt: timestamp("deletedAt"),
});
