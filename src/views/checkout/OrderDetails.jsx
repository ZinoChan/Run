import React from 'react';
import CartList from '../../components/cart/CartList'

export default function OrderDetails() {
    return (
        <div className="order-details text-center d-flex align-items-center">
            <div className="container-fluid w-50">
                <h1>Order Details</h1>
                <CartList/>
                <div className="d-flex justify-content-between mt-5">
                    <button className="btn btn-dark">Back</button>
                    <button className="btn btn-dark">Continue</button>
                </div>
            </div>
        </div>
    )
}
