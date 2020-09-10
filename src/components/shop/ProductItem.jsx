import React from 'react';
import shoe from '../../assets/shoe4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';


export default function ProductItem({openModal}) {

    const handleClick = () => openModal();

    return (
        <div className="col-xl-4 mb-4" onClick={handleClick}>
            <div className="product-item text-center">
                <div class="card position-relative">
                    <div className="item-view"><FontAwesomeIcon icon={faEye}/></div>
                    <img  src={shoe} className="card-img-top mx-auto" style={{width: "80%"}} />
                    <div className="card-body">
                        <div className="item-colors">
                            <span className="item-color"></span>
                            <span className="item-color"></span>
                            <span className="item-color"></span>
                            <span className="item-color"></span>
                        </div>
                        <h3 className="item-title mb-2">NIKE CRAZY IMPLOSIVE</h3>
                        <p className="item-price">Price: <span>$99.99</span></p>
                    </div>
                    <div className="add text-center"><span>Add To Cart</span></div>
                </div>
            </div>
        </div>
    )
}
