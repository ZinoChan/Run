import CartItem from './CartItem';

export default function CartList({ cart, dispatch }) {
  return (
    <>
      {cart.map((item) => (
        <CartItem item={item} key={item.id} dispatch={dispatch} />
      ))}
    </>
  );
}
