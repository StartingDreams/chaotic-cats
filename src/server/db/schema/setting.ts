import {
  pgTableCreator,
  serial,
  timestamp,
  integer,
  uniqueIndex,
  boolean,
  varchar,
  json,
} from "drizzle-orm/pg-core";
import { user } from "./user";
import { env } from "~/env";
import { relations } from "drizzle-orm";

const createTable = pgTableCreator((name) => `${env.TABLE_PREFIX}${name}`);

export const setting = createTable(
  "setting",
  {
    id: serial("id").primaryKey(),
    userId: integer("user_id").references(() => user.id),
    settingName: varchar("setting_name", { length: 255 }).notNull(),
    value: varchar("value", { length: 255 }).notNull(),
    metadata: json("metadata").notNull(),
    enabled: boolean("enabled").default(false).notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    deletedAt: timestamp("deletedAt"),
  },
  (setting) => ({
    userIdIndex: uniqueIndex("user_id_idx").on(setting.userId),
    settingNameToUserIndex: uniqueIndex("setting_name_to_user_idx").on(
      setting.userId,
      setting.settingName,
    ),
  }),
);

export const settingsRelations = relations(setting, ({ one }) => ({
  user: one(user, {
    fields: [setting.userId],
    references: [user.id],
  }),
}));
