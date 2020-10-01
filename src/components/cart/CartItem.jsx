import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { removeFromCart, minusQty, addQty } from '../../actions/cartActions';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';


export default function CartItem({item, dispatch}) {

    const child = {
        hidden: { y: 20, opacity: 0 },
        visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1
        }
        }
    };

    const onDeleteClick = () => {
        dispatch(removeFromCart(item.id));
        toast.warning("item removed from cart");
    };

    const onMinusQtyClick = () => dispatch(minusQty(item.id));

    const onAddQtyClick = () => dispatch(addQty(item.id));

    

    return (
        <motion.div className="cart-item text-center" variants={child}>
            <span 
                className="delete"
                onClick={onDeleteClick}
            ><FontAwesomeIcon icon={faTrashAlt}/></span>
           <div className="container-fluid">
               <div className="row align-items-center">
                   <div className="col-md-6 d-flex" style={{justifyContent: "space-evenly", flexWrap: "wrap"}}>
                       <div className="col-lg-6  cart-item-img" style={{background: `url(${item.img})`}}></div>
                       <div className="col-lg-6  cart-item-info mb-3">
                           <h3>{item.title}</h3>
                           <div className="cart-item-details my-3">
                                <span>size: <i className="font-weight-bold item-size">{item.size.size}</i> </span> <br/>
                                <span> color: <i className="color-box" style={{backgroundColor: `${item.color}`}}></i></span>
                           </div>
                       </div>
                   </div>
                   <div className="col-md-2  sm-device-flex justify-content-between">
                       <span className="sm-device">Price:</span>
                       <span className="price">${item.price}</span>
                   </div>
                   <div className="col-md-2 sm-device-flex justify-content-between">
                        <span className="sm-device">Quantity:</span>
                        <div className="qty">
                            <button 
                                className="btn btn-secondary" disabled={item.quantity === 1}
                                onClick={onMinusQtyClick}
                            >-</button>
                            <span className="mx-3">{item.quantity}</span>
                            <button 
                                className="btn btn-secondary"
                                onClick={onAddQtyClick}    
                            >+</button>
                        </div>
                   </div>
                   <div className="col-md-2 sm-device-flex justify-content-between">
                        <span className="sm-device">Total:</span>
                       <span className="cart-item-total">${parseFloat((item.quantity * item.price).toFixed(2))}</span>
                   </div>
               </div>
           </div>
        </motion.div>
    )
}
