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

export type CatType = {
  id: number;
  name: string;
  color: CatColoring;
  chaos: number;
  prestige: number;
  createdAt: Date;
  updatedAt: Date;
};

type CatProps = {
  cat: CatType;
};
export async function Cat({ cat }: CatProps) {
  return (
    <div className="w-1/4">
      <img src={`/cats/${cat.color}_cat.png`} alt={cat.name} className="cat" />
    </div>
  );
}

export default Cat;
