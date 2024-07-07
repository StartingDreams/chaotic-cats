import { Cat } from "~/app/_components/cat/cat";
import { db } from "~/server/db";

export async function Playground() {
  const breeds = await db.query.breed.findMany({
    with: {
      image: true,
      basePersonality: true,
      baseStats: true,
    },
  });
  breeds.forEach((breed) => {
    console.log(breed);
  });
  return (
    <>
      {breeds.map((breed) => (
        <Cat key={breed.id} cat={breed} />
      ))}
    </>
  );
}

export default Playground;
