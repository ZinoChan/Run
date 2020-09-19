import React from 'react';

export default function CartItem({item}) {

    return (
        <div className="cart-item text-center">
           <div className="container-fluid">
               <div className="row align-items-center">
                   <div className="col-md-6 d-flex" style={{justifyContent: "space-evenly", flexWrap: "wrap"}}>
                       <div className="col-lg-6  cart-item-img" style={{background: `url(${item.img})`}}></div>
                       <div className="col-lg-6  cart-item-info mb-3">
                           <h3>{item.title}</h3>
                           <div className="cart-item-details my-3">
                                <span>size: {item.size.size} </span> <br/>
                                <span> color: <i className="color-box" style={{backgroundColor: `${item.color}`}}></i></span>
                           </div>
                           <div className="btn btn-light">Costomize</div>
                       </div>
                   </div>
                   <div className="col-md-2  sm-device-flex justify-content-between">
                       <span className="sm-device">Price:</span>
                       <span className="price">${item.price}</span>
                   </div>
                   <div className="col-md-2 sm-device-flex justify-content-between">
                        <span className="sm-device">Quantity:</span>
                        <div className="qty">
                            <span className="btn btn-secondary">-</span>
                            <span className="mx-3">1</span>
                            <span className="btn btn-secondary">+</span>
                        </div>
                   </div>
                   <div className="col-md-2 sm-device-flex justify-content-between">
                        <span className="sm-device">Total:</span>
                       <span className="cart-item-total">$99.99</span>
                   </div>
               </div>
           </div>
        </div>
    )
}
