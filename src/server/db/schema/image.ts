import { relations } from "drizzle-orm";
import {
  pgTableCreator,
  serial,
  varchar,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";
import { env } from "~/env";

const createTable = pgTableCreator((name) => `${env.TABLE_PREFIX}${name}`);

export const image = createTable("image", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  url: varchar("url", { length: 1024 }).notNull(),
  enabled: boolean("enabled").default(false).notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  deletedAt: timestamp("deletedAt"),
});
