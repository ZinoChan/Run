import React from 'react'
import ProductItem from './ProductItem';
import { db } from '../../db';
import { motion } from 'framer-motion';


export default function ProductsList({openModal, selectedProduct}) {
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
        opacity: 1,
        scale: 1,
        transition: {
            //delay: 0.3,
            //when: "beforeChildren",
            duration: .4,
            staggerChildren: .8
        }
        }
    };
    return (
        <div className="product-list" style={{marginBottom: "6rem"}}>
            <div className="container-fluid">
                <motion.div 
                    className="row"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
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
                </motion.div>
            </div>
        </div>
    )
}
