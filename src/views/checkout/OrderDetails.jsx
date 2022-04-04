import React from 'react';
import CartList from '../../components/cart/CartList';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { CART, CHECKOUT_STEP_2 } from '../../constants/routes';

export default function OrderDetails() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="order-details mx-auto text-center d-flex align-items-center">
      <div className="container-fluid">
        <h1 className="fs-2 fw-bold mb-4">Order Details</h1>
        <div className="w-50 mx-auto mb-5">
          <CartList cart={cart} dispatch={dispatch} />
        </div>
        <div className="d-flex justify-content-between mt-3">
          <NavLink to={CART} className="btn btn-dark">
            Back
          </NavLink>
          <NavLink to={CHECKOUT_STEP_2} className="btn btn-dark">
            Continue
          </NavLink>
        </div>
      </div>
    </div>
  );
}
