import React from 'react';
import CartList from '../../components/cart/CartList';

export default function Cart() {
    return (
        <main className="cart">
            <div className="container-fluid">
                <CartList/>
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <button className="btn btn-secondary mb-3">Clear Cart</button>
                    </div>
                    <div className="col-md-4">
                        <div className="cart-totals">
                            <p>Subtotal: <span className="font-weight-bold text-dark">$299.99</span></p>
                            <p>shipping: <span className="font-weight-bold text-dark">$5</span></p>
                            <p className="font-weight-bold text-dark">Total: $320.99</p>
                            <button className="btn btn-dark w-100">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
