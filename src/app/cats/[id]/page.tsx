import CatDetails from "~/app/_components/cats/cat-details";

export default function CatsPage({
  params: { id: catId },
}: {
  params: { id: string };
}) {
  return (
    <div className="card">
      <CatDetails id={catId} />
    </div>
  );
}
