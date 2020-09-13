import React from 'react';
import CartItem from './CartItem';

export default function CartList() {
    return (
        <div className="cart-list">
            <div className="cart-header text-center">
                <h3 className="sm-device-header">Cart</h3>
                <div className="row">
                    <div className="col-md-6"><h4>Product</h4></div>
                    <div className="col-md-2"><h4>Price</h4></div>
                    <div className="col-md-2"><h4>Qty</h4></div>
                    <div className="col-md-2"><h4>Total</h4></div>
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
