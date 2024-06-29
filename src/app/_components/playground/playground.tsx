import { Cat, CatType, CatColoring } from "~/app/_components/cat/cat";

const mockCats = (num: number): CatType[] => {
  const cats: CatType[] = [];
  const randomColor = () => {
    const values = Object.keys(CatColoring);
    const enumKey = values[Math.floor(Math.random() * values.length)];
    return CatColoring[enumKey as keyof typeof CatColoring];
  };
  for (let i = 0; i < num; i++) {
    cats.push({
      id: i,
      name: "Test Cat",
      color: randomColor(),
      dimensions: [200, 135],
      chaos: 0,
      prestige: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return cats;
};

export async function Playground() {
  const cats = mockCats(11);
  return (
    <>
      {cats.map((cat) => (
        <Cat key={cat.id} cat={cat} />
      ))}
    </>
  );
}

export default Playground;
