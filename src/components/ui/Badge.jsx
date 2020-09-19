import React from 'react';
import { useSelector } from 'react-redux';


export default function Badge() {

    const cart = useSelector(state => state.cart);

    return (
       <span className="badge badge-danger" style={{borderRadius: '50%'}}>
           {cart.length}
       </span>
    )
}
