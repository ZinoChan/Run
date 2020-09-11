import React from 'react'
import ProductItem from './ProductItem';
import { db } from '../../db';

export default function ProductsList({openModal, selectedProduct}) {
    return (
        <div className="product-list" style={{marginBottom: "6rem"}}>
            <div className="container-fluid">
                <div className="row">
                    {
                        db.map(product => (
                            <ProductItem 
                                product={product} 
                                openModal={openModal}
                                selectedProduct={selectedProduct}   
                                key={product.id} 
                            />
                        )) 
                    }
                </div>
            </div>
        </div>
    )
}
