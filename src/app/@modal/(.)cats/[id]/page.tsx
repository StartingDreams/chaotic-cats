import CatDetails from "~/app/_components/cats/cat-details";
import { Modal } from "~/app/_components/modal";

export function CatModal({
  params: { id: catId },
}: {
  params: { id: string };
}) {
  return (
    <Modal>
      <CatDetails id={catId} />
    </Modal>
  );
}

export default CatModal;
