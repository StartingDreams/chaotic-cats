import Image from "next/image";
import { MISSING_IMAGE_URL } from "~/app/_utils/defaults";
import { getCatByUuid } from "~/server/queries/cat";

type CatDetailsProps = {
  id: string;
};

export async function CatDetails({ id }: CatDetailsProps) {
  const cat = await getCatByUuid(id);

  return cat ? (
    <Image
      src={cat.image.url ?? MISSING_IMAGE_URL}
      alt={cat.name}
      style={{ objectFit: "contain" }}
      className="cat"
      height="50"
      width="50"
    />
  ) : (
    <span>Unknown Cat</span>
  );
}

export default CatDetails;
