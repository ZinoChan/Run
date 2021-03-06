import React from 'react'
import ProductItem from './ProductItem';
import { motion } from 'framer-motion';
import { getProducts } from '../../actions/productsActions';
import Skeleton from 'react-loading-skeleton';

export default function ProductsList({
        openModal, 
        selectedProduct, 
        products, 
        dispatch,
        isLoading
}) {


    React.useEffect(() => {
        if(products.length === 0){
            dispatch(getProducts());
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);   


    const container = {
        hidden: { opacity: 1 },
        visible: {
        opacity: 1,
        transition: {
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
                    { !isLoading  &&  products.length > 0 ?
                        products.map(product => (
                            <ProductItem 
                                product={product} 
                                openModal={openModal}
                                selectedProduct={selectedProduct}   
                                key={product.id} 
                            />
                        )) :
                        new Array(9).fill({}).map((item, index) => (
                            <div className="col-xl-4 col-md-6 col-xs-12 mb-4" key={index}>
                                <Skeleton height={200}/>
                                <Skeleton count={3}/>
                            </div>
                        ))
                    }
                </motion.div>
            </div>
        </div>
    )
}
