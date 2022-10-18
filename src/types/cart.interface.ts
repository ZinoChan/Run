import { Sizes } from './products.interface';

export interface ICart {
  title: string;
  size: Sizes;
  color: string;
  price: number;
  quantity: number;
  img: string;
  id: string;
}
