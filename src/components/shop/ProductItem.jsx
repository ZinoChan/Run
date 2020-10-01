import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

export default function ProductItem({openModal, product, selectedProduct}) {

    const handleClick = () => {
        openModal();
        selectedProduct(product);
    };

    const child = {
        hidden: { y: 20, opacity: 0 },
        visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: .6
        }
        }
    };
    

    return (
        <motion.div 
            className="col-xl-4 col-md-6 col-xs-12 mb-4" 
            onClick={handleClick}
            variants={child}
        >
            <div className="product-item text-center">
                <div className="card position-relative">
                    <div className="item-view"><FontAwesomeIcon icon={faEye}/></div>
                    <img  src={product.item} className="card-img mx-auto" alt="shoe"/>
                    <div className="card-body">
                       <div className="item-info">
                            <p className="item-colors">Colors: 
                                {
                                    product.availableColors.map(item => (
                                        <span key={item.id}
                                            className="item-circle-color ml-2"
                                            style={{backgroundColor: `${item.color}`}}
                                        ></span>
                                    ))
                                }
                            </p>
                            <h3 className="item-title mb-1">{product.title}</h3>
                            <p className="item-price">Price: <span>${product.price}</span></p>
                       </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
