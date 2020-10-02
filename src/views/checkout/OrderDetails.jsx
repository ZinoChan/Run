import React from 'react';
import CartList from '../../components/cart/CartList'
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { CART, CHECKOUT_STEP_2 } from '../../constants/routes';
import { motion } from 'framer-motion';

export default function OrderDetails() {

    const cart = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const pageTransition = {
        in: {
            opacity: 1,
        },
        out: {
            opacity: 0,
        }
    }

    return (
        <motion.div 
            className="order-details mx-auto text-center d-flex align-items-center"
            initial="out"
            animate="in"
            exit="out"
            variants={pageTransition}
        >
            <div className="container-fluid">
                <h1>Order Details</h1>
                <CartList cart={cart} dispatch={dispatch}/>
                <div className="d-flex justify-content-between mt-3">
                    <NavLink to={CART} className="btn btn-dark">Back</NavLink>
                    <NavLink to={CHECKOUT_STEP_2} className="btn btn-dark">Continue</NavLink>
                </div>
            </div>
        </motion.div>
    )
}
