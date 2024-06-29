import Image from "next/image";
import { Cat, CatType, CatColoring } from "./_components/cat/cat";

const createTestCats = (num: number): CatType[] => {
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

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex flex-col items-center justify-center">
        <div className="flex h-full w-full flex-row flex-wrap">
          {createTestCats(12).map((cat) => (
            <Cat key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
    </main>
  );
}
