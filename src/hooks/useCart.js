import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';

const useCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const isItemOncart = (id) => !!cart.find((item) => item.id === id);

  const addItemToCart = (item, selectedSize, selectedColor) => {
    if (isItemOncart(item.id)) {
      dispatch(removeFromCart(item.id));
      toast.success('Item removed from cart');
    } else {
      const purchasedItem = {
        title: item.title,
        size: selectedSize.size,
        color: selectedColor.color,
        img: selectedColor.imgs[0].img,
        id: item.id,
        price: item.price,
      };
      dispatch(addToCart(purchasedItem));

      toast.success('Item added to cart');
    }
  };

  return { cart, isItemOncart, addItemToCart };
};

export default useCart;
