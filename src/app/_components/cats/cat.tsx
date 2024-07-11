import Image from "next/image";
import { MISSING_IMAGE_URL } from "~/app/_utils/defaults";
import type { Cat } from "~/server/db/schema/types";

type CatProps = {
  cat: Cat;
};

export async function Cat({ cat }: CatProps) {
  return (
    <Image
      src={cat.image?.url ?? MISSING_IMAGE_URL}
      alt={cat.name}
      style={{ objectFit: "contain" }}
      className="cat"
      height="50"
      width="50"
    />
  );
}

export default Cat;
