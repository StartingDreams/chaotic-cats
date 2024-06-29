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

const createTable = pgTableCreator((name) => `${env.TABLE_PREFIX}${name}`);

export const users = createTable(
  "users",
  {
    id: serial("id").primaryKey(),
    authServiceId: varchar("auth_service_id", { length: 255 }).notNull(),
    level: integer("level").default(1).notNull(),

    // other
    enabled: boolean("enabled").default(false).notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    deletedAt: timestamp("deletedAt"),
  },
  (users) => ({
    authServiceIdIndex: uniqueIndex("auth_service_id_idx").on(
      users.authServiceId,
    ),
  }),
);
