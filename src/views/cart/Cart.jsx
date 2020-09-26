import React from 'react';
import CartList from '../../components/cart/CartList';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../actions/cartActions'
import { NavLink } from 'react-router-dom';
import { CHECKOUT_STEP_1 } from '../../constants/routes';




export default function Cart() {
    

    const cart = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const handleClearClick = () => dispatch(clearCart());

    const grandTotal = items => {
        return items.reduce((sum, i) => {
          return sum + (i.price * i.quantity)
        }, 0)
    };

    const subTotal = parseFloat(grandTotal(cart).toFixed(2));


    

    return (
        <main className="cart">
            <div className="container-fluid">
                <CartList cart={cart} dispatch={dispatch}/>
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <button 
                            className="btn btn-secondary mb-3"
                            onClick={handleClearClick}
                        >Clear Cart</button>
                    </div>
                    <div className="col-md-4">
                        <div className="cart-totals">
                            <p>Subtotal: <span className="font-weight-bold text-dark">${subTotal}</span></p>
                            <p>shipping: <span className="font-weight-bold text-dark">$5</span></p>
                            <p className="font-weight-bold text-dark">Total: ${subTotal + 5}</p>
                            <NavLink 
                            to={CHECKOUT_STEP_1}
                                className="btn btn-dark w-100"
                            >Checkout</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
