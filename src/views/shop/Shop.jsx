import React, {useState} from 'react';
import ProductsList from '../../components/shop/ProductsList';
import Modal from '../../components/ui/Modal';
import ProductCard from '../../components/ui/ProductCard';
import PreLoader from '../../components/ui/PreLoader';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';


export default function Shop() {
    const [isOpenModal, setOpenModal] = useState(false);
    const [isSelectedProduct, setSelectedProduct] = useState(null);

    const selectedProduct = product => setSelectedProduct(product);

    const openModal = () => setOpenModal(true);

    const closeModal = () => setOpenModal(false);

    const {products, cart, authenticating, isLoading} = useSelector(state => ({
        cart: state.cart,
        products: state.products,
        authenticating: !!state.app.isAuthenticating,
        isLoading: state.app.isLoading
    }))

    const dispatch  = useDispatch();

    const pageTransition = {
        in: {
            opacity: 1,
        },
        out: {
            opacity: 0,
        }
    }
    
    return (
        <motion.section 
            id="shop"
            initial="out"
            animate="in"
            exit="out"
            variants={pageTransition}
        >
            {authenticating || isLoading ? <PreLoader theme="light"/> : null}
            <ProductsList
                openModal={openModal}
                selectedProduct={selectedProduct}
                products={products}
                dispatch={dispatch}
            />
            <Modal
                isOpen={isOpenModal}
                closeModal={closeModal}
            >
                <ProductCard 
                    product={isSelectedProduct}
                    cart={cart}
                    dispatch={dispatch}
                />
                <button 
                    className="btn btn-dark position-absolute modal-btn" 
                    onClick={closeModal}
                >X</button>
            </Modal>
        </motion.section>
    )
}
