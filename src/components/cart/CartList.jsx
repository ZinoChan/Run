import React from 'react';
import CartItem from './CartItem';

export default function CartList() {
    return (
        <div className="cart-list">
            <div className="cart-header text-center">
                <div className="row">
                    <div className="col-xl-6"><h4>Product</h4></div>
                    <div className="col-xl-2"><h4>Price</h4></div>
                    <div className="col-xl-2"><h4>Qty</h4></div>
                    <div className="col-xl-2"><h4>Total</h4></div>
                </div>
            </div>
            <div className="cart-items">
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
            </div>
        </div>
    )
}
