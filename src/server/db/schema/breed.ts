import {
  pgTableCreator,
  serial,
  text,
  timestamp,
  integer,
  uniqueIndex,
  boolean,
  varchar,
} from "drizzle-orm/pg-core";
import { env } from "~/env";
import { basePersonality } from "./base_personality";
import { baseStats } from "./base_stats";
import { relations } from "drizzle-orm";
import { image } from "./image";

const createTable = pgTableCreator((name) => `${env.TABLE_PREFIX}${name}`);

export const breed = createTable(
  "breed",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 50 }).notNull(),
    variant: varchar("variant", { length: 50 }).default("default").notNull(),
    rarity: integer("rarity").notNull(),
    blurb: text("blurb").notNull(),
    basePersonalityId: integer("base_personality_id")
      .notNull()
      .references(() => basePersonality.id),
    baseStatsId: integer("base_stats_id")
      .notNull()
      .references(() => baseStats.id),
    imageId: integer("image_id")
      .notNull()
      .references(() => image.id),
    enabled: boolean("enabled").default(false).notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    deletedAt: timestamp("deletedAt"),
  },
  (catBreed) => ({
    variantIndex: uniqueIndex("variant_idx").on(
      catBreed.name,
      catBreed.variant,
    ),
  }),
);

export const breedsRelations = relations(breed, ({ one }) => ({
  basePersonality: one(basePersonality, {
    fields: [breed.basePersonalityId],
    references: [basePersonality.id],
  }),
  baseStats: one(baseStats, {
    fields: [breed.baseStatsId],
    references: [baseStats.id],
  }),
  image: one(image, {
    fields: [breed.imageId],
    references: [image.id],
  }),
}));
