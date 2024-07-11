import Link from "next/link";

export default function HomePage() {
  const cats = ["c32d8b45-92fe-44f6-8b61-42c2107dfe87"];

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
