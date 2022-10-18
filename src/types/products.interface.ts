export interface IProductRes {
  title: string;
  price: number;
  id: string;
  availableColors: Colors[];
  availableSizes: Sizes[];
  item: string;
  collection: string;
}

export interface Colors {
  color: string;
  id: string;
  imgs: ColorImg[];
}

export interface ColorImg {
  id: string;
  img: string;
}

export interface Sizes {
  id: string;
  size: string;
}
