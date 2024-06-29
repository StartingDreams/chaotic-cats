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
import { users } from "./users";
import { env } from "~/env";

const createTable = pgTableCreator((name) => `${env.TABLE_PREFIX}${name}`);

export const settings = createTable(
  "settings",
  {
    id: serial("id").primaryKey(),
    userId: integer("user_id").references(() => users.id),
    settingName: varchar("setting_name", { length: 255 }).notNull(),
    value: varchar("value", { length: 255 }).notNull(),
    metadata: json("metadata").notNull(),
    enabled: boolean("enabled").default(false).notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    deletedAt: timestamp("deletedAt"),
  },
  (settings) => ({
    userIdIndex: uniqueIndex("user_id_idx").on(settings.userId),
    settingNameToUserIndex: uniqueIndex("setting_name_to_user_idx").on(
      settings.userId,
      settings.settingName,
    ),
  }),
);
