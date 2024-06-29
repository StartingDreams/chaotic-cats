import {
  pgTableCreator,
  serial,
  text,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";
import { env } from "~/env";

const createTable = pgTableCreator((name) => `${env.TABLE_PREFIX}${name}`);

export const images = createTable("images", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),

  enabled: boolean("enabled").default(false).notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  deletedAt: timestamp("deletedAt"),
});
