export function CatModal({
  params: { id: catId },
}: {
  params: { id: string };
}) {
  return <div>{catId}</div>;
}

export default CatModal;
