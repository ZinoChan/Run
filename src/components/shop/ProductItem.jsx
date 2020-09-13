import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';


export default function ProductItem({openModal, product, selectedProduct}) {

    const handleClick = () => {
        openModal();
        selectedProduct(product);
    };

    

    return (
        <div className="col-xl-4 col-md-6 col-xs-12 mb-4" onClick={handleClick}>
            <div className="product-item text-center">
                <div className="card position-relative">
                    <div className="item-view"><FontAwesomeIcon icon={faEye}/></div>
                    <img  src={product.item} class="card-img mx-auto"/>
                    <div className="card-body">
                       <div className="item-info">
                            <p className="item-colors">Colors: {product.availableColors.length}</p>
                            <h3 className="item-title mb-1">{product.title}</h3>
                            <p className="item-price">Price: <span>${product.price}</span></p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
