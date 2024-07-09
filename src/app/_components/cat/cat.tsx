import Image from "next/image";
import { MISSING_IMAGE_URL } from "~/app/_utils/defaults";
import type { Cat } from "~/server/db/schema/types";

// /cats/black_cat.png
// /cats/brown_cat.png
// /cats/green_magic_cat.png
// /cats/grey_cat.png
// /cats/orange_cat.png
// /cats/purple_magic_cat.png
// /cats/siamese_cat.png
// /cats/white_cat.png

export type CatProps = {
  cat: Cat;
};

export async function Cat({ cat }: CatProps) {
  return (
    <Image
      src={cat.image?.url ?? MISSING_IMAGE_URL}
      alt={cat.name}
      className="cat"
      objectFit="fill"
      height="50"
      width="50"
    />
  );
}

export default Cat;
