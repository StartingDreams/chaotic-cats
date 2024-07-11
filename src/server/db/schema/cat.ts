import {
  pgTableCreator,
  serial,
  timestamp,
  integer,
  varchar,
  uuid,
} from "drizzle-orm/pg-core";
import { env } from "~/env";
import { relations, sql } from "drizzle-orm";
import { image } from "./image";
import { breed } from "./breed";
import { user } from "./user";

const createTable = pgTableCreator((name) => `${env.TABLE_PREFIX}${name}`);

export const cat = createTable("cat", {
  id: serial("id").primaryKey(),
  uuid: uuid("uuid")
    .default(sql`gen_random_uuid()`)
    .notNull()
    .unique(),
  name: varchar("name", { length: 50 }).notNull(),
  userId: varchar("user_id", { length: 40 })
    .references(() => user.id)
    .notNull(),
  breedId: integer("breed_id")
    .notNull()
    .references(() => breed.id),
  imageId: integer("image_id")
    .notNull()
    .references(() => image.id),

  // personality
  charm: integer("charm").notNull(),
  affection: integer("affection").notNull(),
  friendliness: integer("friendliness").notNull(),
  cautiousness: integer("cautiousness").notNull(),
  aggression: integer("aggression").notNull(),
  dominance: integer("dominance").notNull(),

  // stats
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
  experience: integer("experience").default(0).notNull(),
  level: integer("level").default(1).notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  deletedAt: timestamp("deletedAt"),
});

export const catRelations = relations(cat, ({ one }) => ({
  user: one(user, {
    fields: [cat.userId],
    references: [user.id],
  }),
  breed: one(breed, {
    fields: [cat.breedId],
    references: [breed.id],
  }),
  image: one(image, {
    fields: [cat.imageId],
    references: [image.id],
  }),
}));
