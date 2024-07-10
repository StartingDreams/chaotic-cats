import Link from "next/link";
import { cat } from "~/server/db/schema";

export function HomePage() {
  const cats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <h1 className="text-4xl font-bold">Home Page</h1>
      <div className="flex flex-row flex-wrap gap-4">
        {cats.map((catId) => (
          <div key={catId}>
            <Link href={`/cats/${catId}`}>
              <span className="p-y2 rounded bg-purple-500 px-2 font-bold hover:bg-purple-700">
                Cat {catId}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
