export type Badge = {
  slug: string;
  label: string;
};

export type CatCardItem = {
  id: string;
  imageAlt: string;
  imageSrc: string;
  name: string;
  birthday: string;
  badges?: Badge[];
};

export type CatCardList = CatCardItem[];
