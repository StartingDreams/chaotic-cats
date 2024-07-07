import { relations } from "drizzle-orm";
import {
  pgTableCreator,
  serial,
  timestamp,
  integer,
  uniqueIndex,
  boolean,
  varchar,
} from "drizzle-orm/pg-core";
import { env } from "~/env";
import { setting } from "./setting";

const createTable = pgTableCreator((name) => `${env.TABLE_PREFIX}${name}`);

export const user = createTable(
  "user",
  {
    id: serial("id").primaryKey(),
    username: varchar("username", { length: 255 }).notNull(),
    preferredName: varchar("preferred_name", { length: 255 }).notNull(),
    authServiceId: varchar("auth_service_id", { length: 255 })
      .unique()
      .notNull(),
    level: integer("level").default(1).notNull(),
    isAdmin: boolean("admin").default(false).notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    deletedAt: timestamp("deletedAt"),
  },
  (user) => ({
    authServiceIdIndex: uniqueIndex("auth_service_id_idx").on(
      user.authServiceId,
    ),
  }),
);

export const usersRelations = relations(user, ({ many }) => ({
  settings: many(setting),
}));
