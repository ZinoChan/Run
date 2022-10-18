import { addToCart, removeFromCart } from '@/reducers/cartReducer';
import { useAppSelector } from '@/store';
import { Colors, IProductRes, Sizes } from '@/types/products.interface';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const useCart = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useDispatch();

  const isItemOncart = (id: string) => !!cart.find((item) => item.id === id);

  const addItemToCart = (
    item: IProductRes,
    selectedSize: Sizes,
    selectedColor: Colors
  ) => {
    if (isItemOncart(item.id)) {
      dispatch(removeFromCart(item.id));
      toast.success('Item removed from cart');
    } else {
      const purchasedItem = {
        title: item.title,
        size: selectedSize,
        color: selectedColor.color,
        img: selectedColor.imgs[0].img,
        id: item.id,
        price: item.price,
        quantity: 1,
      };
      dispatch(addToCart(purchasedItem));

      toast.success('Item added to cart');
    }
  };

  return { cart, isItemOncart, addItemToCart };
};

export default useCart;
