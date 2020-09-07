import React from 'react';
import Banner from '../../components/ui/Banner';
import Header from '../../components/ui/Header';
import CartList from '../../components/cart/CartList';

export default function Cart() {
    return (
        <main className="cart">
            <Header/>
            <Banner title="My Cart"/>
            <div className="container-fluid">
                <CartList/>
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
