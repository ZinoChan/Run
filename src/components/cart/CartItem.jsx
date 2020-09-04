import React from 'react';
import shoe from '../../assets/shoe4.png';

export default function CartItem() {
    return (
        <div className="cart-item text-center">
           <div className="container-fluid">
               <div className="row align-items-center">
                   <div className="col-xl-6 d-flex" style={{justifyContent: "space-evenly"}}>
                       <div className="cart-item-img">
                           <img src={shoe} alt="shoe"/>
                       </div>
                       <div className="cart-item-info">
                           <h3>Nike Crazy implosive </h3>
                           <div className="cart-item-details my-3">
                           <span>size: 39 </span>
                           <span> color: orange</span>
                           </div>
                           <div className="btn cart-btn">Costomize</div>
                       </div>
                   </div>
                   <div className="col-xl-2">
                       <span className="price">$99.99</span>
                   </div>
                   <div className="col-xl-2">
                        <div className="qty">
                            <span>-</span>
                            <span className="mx-3">1</span>
                            <span>+</span>
                        </div>
                   </div>
                   <div className="col-xl-2">
                       <span className="cart-item-total">$99.99</span>
                   </div>
               </div>
           </div>
        </div>
    )
}
