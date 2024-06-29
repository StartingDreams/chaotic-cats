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

const createTable = pgTableCreator((name) => `${env.TABLE_PREFIX}${name}`);

export const breeds = createTable(
  "breeds",
  {
    id: serial("id").primaryKey(),
    breed: varchar("breed", { length: 50 }).notNull(),
    variant: varchar("variant", { length: 50 }).default("default").notNull(),
    rarity: integer("rarity").notNull(),
    blurb: text("blurb").notNull(),

    // other
    enabled: boolean("enabled").default(false).notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    deletedAt: timestamp("deletedAt"),
  },
  (catBreeds) => ({
    variantIndex: uniqueIndex("variant_idx").on(
      catBreeds.breed,
      catBreeds.variant,
    ),
  }),
);
