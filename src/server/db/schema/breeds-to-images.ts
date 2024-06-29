import { breeds } from "./breeds";
import { images } from "./images";
import { pgTableCreator, integer } from "drizzle-orm/pg-core";
import { env } from "~/env";

const createTable = pgTableCreator((name) => `${env.TABLE_PREFIX}${name}`);

export const breedsToImages = createTable("breeds_to_images", {
  breedId: integer("breed_id")
    .notNull()
    .references(() => breeds.id),
  imageId: integer("image_id")
    .notNull()
    .references(() => images.id),
});
