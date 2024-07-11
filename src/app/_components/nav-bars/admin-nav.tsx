import Link from "next/link";

export default function AdminNav() {
  return (
    <div className="flex flex-row flex-wrap gap-4 p-2 text-2xl font-bold">
      <Link
        className="p-y2 py-1font-bold rounded bg-purple-500 px-2 hover:bg-purple-700"
        href="/admin/breeds"
      >
        Edit Breeds
      </Link>
      <Link
        className="p-y2 rounded bg-purple-500 px-2  font-bold hover:bg-purple-700"
        href="/admin/images"
      >
        Edit Images
      </Link>
      <Link
        className="p-y2 rounded bg-purple-500 px-2 font-bold hover:bg-purple-700"
        href="/admin/stats"
      >
        Edit Stats
      </Link>
      <Link
        className="p-y2 rounded bg-purple-500 px-2 font-bold hover:bg-purple-700"
        href="/admin/personalities"
      >
        Edit Personalities
      </Link>
    </div>
  );
}
