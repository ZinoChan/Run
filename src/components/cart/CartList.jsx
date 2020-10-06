import React from 'react';
import CartItem from './CartItem';
import { motion } from 'framer-motion';


export default function CartList({cart, dispatch}) {

    
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.3,
            staggerChildren: .8,
            duration: .4
        }
        }
    };

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
            <motion.ul 
                className="cart-items"
                variants={container}
                initial="hidden"
                animate="visible"
            >
               { cart.length > 0 ? cart.map(item => (
                    
                    <CartItem item={item} key={item.id}  dispatch={dispatch}/>
                ))

                : <h1 className="my-5 text-center">Your Cart is empty</h1>
                }
                
            </motion.ul>
        </div>
    )
}
