import { fetchMyCats } from "~/app/_actions/fetchCats";
import { Cat } from "~/app/_components/cats/cat";

export default async function Playground() {
  const cats = await fetchMyCats();
  return (
    <>
      {cats.map((cat) => (
        <Cat key={cat.id} cat={cat} />
      ))}
    </>
  );
}
