import {
  pgTableCreator,
  serial,
  text,
  timestamp,
  integer,
  uniqueIndex,
  boolean,
} from "drizzle-orm/pg-core";
import { env } from "~/env";

const createTable = pgTableCreator((name) => `${env.TABLE_PREFIX}${name}`);

export const breeds = createTable(
  "breeds",
  {
    id: serial("id").primaryKey(),
    breed: text("breed").notNull(),
    variant: text("variant").default("default").notNull(),
    rarity: integer("rarity").notNull(),
    blurb: text("blurb").notNull(),

    // base tats
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

    // base personality traits
    charm: integer("charm").notNull(),
    affection: integer("affection").notNull(),
    friendliness: integer("friendliness").notNull(),
    cautiousness: integer("cautiousness").notNull(),
    aggression: integer("aggression").notNull(),
    dominance: integer("dominance").notNull(),

    // other
    enabled: boolean("enabled").default(false).notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (catBreeds) => ({
    variantIndex: uniqueIndex("variant_idx").on(
      catBreeds.breed,
      catBreeds.variant,
    ),
  }),
);
