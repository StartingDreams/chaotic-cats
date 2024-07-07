import Image from "next/image";

import type { Breed } from "~/server/db/schema/types";

// /cats/black_cat.png
// /cats/brown_cat.png
// /cats/green_magic_cat.png
// /cats/grey_cat.png
// /cats/orange_cat.png
// /cats/purple_magic_cat.png
// /cats/siamese_cat.png
// /cats/white_cat.png

type CatProps = {
  cat: Breed;
};

export async function Cat({ cat }: CatProps) {
  cat.image.url;

  return (
    <Image
      src={cat.image.url}
      alt={cat.name}
      className="cat"
      height="50"
      width="50"
    />
  );
}

export default Cat;
