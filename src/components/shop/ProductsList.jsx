import React from 'react'
import ProductItem from './ProductItem'

export default function ProductsList({openModal}) {
    return (
        <div className="product-list" style={{marginBottom: "6rem"}}>
            <div className="container-fluid">
                <div className="row">
                    <ProductItem openModal={openModal}/>
                </div>
            </div>
        </div>
    )
}
