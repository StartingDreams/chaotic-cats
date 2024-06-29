import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import * as schema from "~/server/db/schema";
// import { env } from "~/env";

export const db = drizzle(sql, { schema });
