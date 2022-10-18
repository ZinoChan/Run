import CartList from '@/components/cart/CartList';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch, useAppSelector } from '@/store';
import { ICart } from '@/types/cart.interface';
import { clearCart } from '@/reducers/cartReducer';
import { CHECKOUT_STEP_1 } from '@/constants/routes';

export default function Cart() {
  const { cart } = useAppSelector((state) => ({
    cart: state.cart,
  }));

  const dispatch = useAppDispatch();

  const grandTotal = (items: ICart[]) => {
    return items.reduce((sum, i) => {
      return sum + i.price * i.quantity;
    }, 0);
  };

  const subTotal = parseFloat(grandTotal(cart).toFixed(2));

  return (
    <section className="cart">
      <div className="container-fluid">
        <h1 className="fs-2 fw-bold text-center mb-4">Your Basket</h1>

        {cart.length > 0 && (
          <>
            <button
              className="btn btn-outline-danger mb-2"
              onClick={() => dispatch(clearCart())}
            >
              clean basket
            </button>
            <div className="row g-5 align-items-start">
              <div className="col col-md-6">
                <CartList cart={cart} dispatch={dispatch} />
              </div>
              <div className="col col-md-6 card-glass pt-3 pb-3">
                <h3 className="fs-3 fw-bold mb-4 text-center">Order summary</h3>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h4 className="fs-3 fw-bold">Total</h4>
                  <p className="fs-2 fw-bold">{subTotal} $</p>
                </div>
                <Link to={CHECKOUT_STEP_1}>
                  <button className="btn btn-dark btn-lg w-100 d-flex align-items-center justify-content-center">
                    <span className="me-4">
                      <FontAwesomeIcon icon={faCreditCard} />
                    </span>
                    Process To Checkout
                  </button>
                </Link>
              </div>
            </div>
          </>
        )}
        {cart.length === 0 && (
          <h2 className="fs-3 text-center text-capitalize">
            Your cart is empty
          </h2>
        )}
      </div>
    </section>
  );
}
