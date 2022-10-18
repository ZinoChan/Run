import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-hot-toast';
import { ICart } from '@/types/cart.interface';
import { addQty, minusQty, removeFromCart } from '@/reducers/cartReducer';

type Props = {
  item: ICart;
  dispatch: any;
};

export default function CartItem({ item, dispatch }: Props) {
  const onDeleteClick = () => {
    dispatch(removeFromCart(item.id));
    toast('item removed from cart', { icon: '🗑️' });
  };

  const onMinusQtyClick = () => dispatch(minusQty(item.id));

  const onAddQtyClick = () => dispatch(addQty(item.id));

  return (
    <div className="p-2 card-glass mb-2">
      <div className="d-flex items-center justify-content-between">
        <div
          className="cart-item-img"
          style={{ background: `url(${item.img})` }}
        />
        <div>
          <h3 className="fs-4 mb-2 text-capitalize fw-bold">{item.title}</h3>
          <p className=" fs-6 ">
            <span className="me-1">size: {item.size.size}</span>
          </p>
          <p className="fs-6 d-flex align-items-center">
            <span className="me-1">color:</span>
            <i
              className="color-circle"
              style={{ backgroundColor: `${item.color}` }}
            ></i>
          </p>
          <p className="fs-6">
            <span className="me-1">price:</span>
            {item.price}
          </p>
        </div>
        <div className="d-flex flex-column align-items-end justify-content-between">
          <span className="text-danger delete" onClick={onDeleteClick}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </span>
          <div className="d-flex align-items-center justify-content-between">
            <button
              className="btn cart-btn"
              disabled={item.quantity === 1}
              onClick={onMinusQtyClick}
            >
              -
            </button>
            <span className="mx-3">{item.quantity}</span>
            <button className="btn cart-btn" onClick={onAddQtyClick}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
