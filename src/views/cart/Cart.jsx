import React from 'react';
import Banner from '../../components/ui/Banner';
import CartItem from '../../components/cart/CartItem';

export default function Cart() {
    return (
        <main className="cart">
            <Banner title="My Cart"/>
            <div className="container-fluid">
                <div className="cart-items">
                    <div className="cart-header text-center">
                        <div className="row">
                            <div className="col-xl-6"><h4>Product</h4></div>
                            <div className="col-xl-2"><h4>Price</h4></div>
                            <div className="col-xl-2"><h4>Qty</h4></div>
                            <div className="col-xl-2"><h4>Total</h4></div>
                        </div>
                    </div>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                </div>
                <div className="row align-items-center">
                    <div className="col-xl-8">
                        <button className="btn btn-danger mx-3">Clear Cart</button>
                    </div>
                    <div className="col-xl-4">
                        <div className="cart-totals">
                            <p>Subtotal: <span className="font-weight-bold text-dark">$299.99</span></p>
                            <p>shipping: <span className="font-weight-bold text-dark">$5</span></p>
                            <p className="font-weight-bold text-dark">Total: $320.99</p>
                            <button className="btn checkout w-100">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
