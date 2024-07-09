import { getCats } from "~/server/queries/cat";

export async function fetchMyCats() {
  return await getCats();
}
