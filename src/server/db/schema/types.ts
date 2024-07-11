export type BaseStats = {
  id: number;
  name: string;
  strength: number;
  mass: number;
  dexterity: number;
  speed: number;
  toughness: number;
  endurance: number;
  knowledge: number;
  learningEfficiency: number;
  creativity: number;
  wisdom: number;
  willpower: number;
  mana: number;
  potency: number;
  enabled: boolean;
  updatedAt: Date;
  createdAt: Date;
  deletedAt: Date | null;
};

export type BasePersonality = {
  id: number;
  name: string;
  charm: number;
  affection: number;
  friendliness: number;
  cautiousness: number;
  aggression: number;
  dominance: number;
  enabled: boolean;
  updatedAt: Date;
  createdAt: Date;
  deletedAt: Date | null;
};

export type Breed = {
  id: number;
  name: string;
  variant: string;
  rarity: number;
  blurb: string;
  basePersonalityId: number;
  basePersonality?: BasePersonality;
  baseStatsId: number;
  baseStats?: BaseStats;
  imageId: number;
  image?: Image;
  enabled: boolean;
  updatedAt: Date;
  createdAt: Date;
  deletedAt: Date | null;
};

export type Image = {
  id: number;
  name: string;
  url: string;
  enabled: boolean;
  updatedAt: Date;
  createdAt: Date;
  deletedAt: Date | null;
};

export type Setting = {
  id: number;
  userId: number;
  settingName: string;
  value: string;
  metadata: string;
  enabled: boolean;
  updatedAt: Date;
  createdAt: Date;
  deletedAt: Date | null;
};

export type User = {
  id: string;
  username: string;
  preferredName: string;
  isAdmin: boolean;
  level: number;
  settings?: Setting[];
  updatedAt: Date;
  createdAt: Date;
  deletedAt: Date | null;
};

export type Cat = {
  id: number;
  uuid: string;
  name: string;
  userId: string;
  user?: User;
  imageId: number;
  image?: Image;
  breedId: number;
  breed?: Breed;
  charm: number;
  affection: number;
  friendliness: number;
  cautiousness: number;
  aggression: number;
  dominance: number;
  strength: number;
  mass: number;
  dexterity: number;
  speed: number;
  toughness: number;
  endurance: number;
  knowledge: number;
  learningEfficiency: number;
  creativity: number;
  wisdom: number;
  willpower: number;
  mana: number;
  potency: number;
  experience: number;
  level: number;
  updatedAt: Date;
  createdAt: Date;
  deletedAt: Date | null;
};
