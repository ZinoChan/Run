import React from 'react'
import ProductItem from './ProductItem'

export default function ProductsList() {
    return (
        <div className="product-list" style={{marginBottom: "6rem"}}>
            <div className="container-fluid">
                <div className="row">
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                </div>
            </div>
        </div>
    )
}
