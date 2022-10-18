import CartItem from './CartItem';
import { ICart } from '@/types/cart.interface';

type Props = {
  cart: ICart[];
  dispatch: any;
};

export default function CartList({ cart, dispatch }: Props) {
  return (
    <>
      {cart.map((item) => (
        <CartItem item={item} key={item.id} dispatch={dispatch} />
      ))}
    </>
  );
}
