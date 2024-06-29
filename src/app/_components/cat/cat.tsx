import Image from "next/image";

export enum CatColoring {
  Black = "black",
  Brown = "brown",
  GreenMagic = "green_magic",
  Grey = "grey",
  Orange = "orange",
  PurpleMagic = "purple_magic",
  Siamese = "siamese",
  White = "white",
}

type CatDimensions = [number, number];

export type CatType = {
  id: number;
  name: string;
  color: CatColoring;
  dimensions?: CatDimensions;
  chaos: number;
  prestige: number;
  createdAt: Date;
  updatedAt: Date;
};

const defaultDimensions: CatDimensions = [200, 250];
type CatProps = {
  cat: CatType;
};
export async function Cat({ cat }: CatProps) {
  const dimensions = cat.dimensions ?? defaultDimensions;

  return (
    <div className="w-1/4">
      <Image
        src={`/cats/${cat.color}_cat.png`}
        alt={cat.name}
        className="cat"
        width={dimensions[0]}
        height={dimensions[1]}
      />
    </div>
  );
}
