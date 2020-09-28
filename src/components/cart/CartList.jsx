import React from 'react';
import CartItem from './CartItem';


export default function CartList({cart, dispatch}) {

    

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
               { cart.length > 0 ? cart.map(item => (
                   <CartItem item={item} key={item.id} dispatch={dispatch}/>
               ))
                : <h1 className="my-5 text-center">Your Cart is empty</h1>
                }
                
            </div>
        </div>
    )
}
