import React from 'react';
import CartList from '../../components/cart/CartList'
import { useSelector, useDispatch } from 'react-redux';


export default function OrderDetails() {

    const cart = useSelector(state => state.cart);

    const dispatch = useDispatch();

    return (
        <div className="order-details mx-auto text-center d-flex align-items-center">
            <div className="container-fluid">
                <h1>Order Details</h1>
                <CartList cart={cart} dispatch={dispatch}/>
                <div className="d-flex justify-content-between mt-3">
                    <button className="btn btn-dark">Back</button>
                    <button className="btn btn-dark">Continue</button>
                </div>
            </div>
        </div>
    )
}
