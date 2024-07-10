export const dynamic = "force-dynamic";

export function CatsPage({
  params: { id: catId },
}: {
  params: { id: string };
}) {
  return <div className="card">{catId}</div>;
}

export default CatsPage;
