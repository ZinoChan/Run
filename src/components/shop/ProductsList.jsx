import React from 'react';
import ProductItem from './ProductItem';
import { motion } from 'framer-motion';

export default function ProductsList({ openModal, selectedProduct, products }) {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.8,
      },
    },
  };
  return (
    <div className="product-list" style={{ marginBottom: '6rem' }}>
      <div className="container-fluid">
        <motion.div
          className="row"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {products.map((product) => (
            <ProductItem
              product={product}
              openModal={openModal}
              selectedProduct={selectedProduct}
              key={product.id}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
