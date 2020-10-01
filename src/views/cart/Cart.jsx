import React from 'react';
import CartList from '../../components/cart/CartList';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../actions/cartActions'
import { NavLink } from 'react-router-dom';
import { CHECKOUT_STEP_1, SHOP } from '../../constants/routes';
import { toast } from 'react-toastify';
import PreLoader from '../../components/ui/PreLoader';




export default function Cart() {
    

    const {cart, auth, authenticating} = useSelector(state => ({
        cart: state.cart,
        auth: state.auth.id && state.auth.type === 'client',
        authenticating: !!state.app.isAuthenticating
    }))

    const dispatch = useDispatch();

    const handleClearClick = () => dispatch(clearCart());

    const grandTotal = items => {
        return items.reduce((sum, i) => {
          return sum + (i.price * i.quantity)
        }, 0)
    };

    const subTotal = parseFloat(grandTotal(cart).toFixed(2));

    const handleCheckout = () => {if(!auth) toast.error("Sign in to checkout");}

    return (
        <main className="cart">
            {authenticating ? <PreLoader theme="light"/> : null}
            <div className="container-fluid">
                <CartList cart={cart} dispatch={dispatch}/>
                <div className="row align-items-center">
                    <div className="col-md-8">
                        {
                            cart.length === 0 ?
                            <NavLink to={SHOP} className="btn btn-dark">Back To Shop</NavLink>
                            :
                            <button 
                            className="btn btn-secondary mb-3"
                            onClick={handleClearClick}
                        >Clear Cart</button>}
                    </div>
                    <div className="col-md-4">
                        {
                            cart.length === 0 ?
                            ""
                            :
                            <div className="cart-totals">
                                <p>Subtotal: <span className="font-weight-bold text-dark">${subTotal}</span></p>
                                <p>shipping: <span className="font-weight-bold text-dark">$5</span></p>
                                <p className="font-weight-bold text-dark">Total: ${subTotal + 5}</p>
                                <NavLink 
                                to={CHECKOUT_STEP_1}
                                    className="btn btn-dark w-100"
                                    onClick={handleCheckout}
                                >Checkout</NavLink>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}
