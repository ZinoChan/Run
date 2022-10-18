import { useAppSelector } from '@/store';

export default function Badge() {
  const cart = useAppSelector((state) => state.cart);

  return <span className="badge-circle bg-danger">{cart.length}</span>;
}
