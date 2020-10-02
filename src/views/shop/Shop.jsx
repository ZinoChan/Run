import React, {useState} from 'react'
import Filter from '../../components/ui/Filter';
import ProductsList from '../../components/shop/ProductsList';
import NewsLetter from '../../components/ui/NewsLetter';
import Modal from '../../components/ui/Modal';
import ProductCard from '../../components/ui/ProductCard';
import PreLoader from '../../components/ui/PreLoader';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';


export default function Shop() {
    const [isOpenModal, setOpenModal] = useState(false);
    const [isSelectedProduct, setSelectedProduct] = useState(null);

    const selectedProduct = product => setSelectedProduct(product);

    const openModal = () => setOpenModal(true);

    const closeModal = () => setOpenModal(false);

    const authenticating =  useSelector(state => !!state.app.isAuthenticating )

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
            {authenticating ? <PreLoader theme="light"/> : null}
            <Filter/>
            <ProductsList
                openModal={openModal}
                selectedProduct={selectedProduct}
            />
            <Modal
                isOpen={isOpenModal}
                closeModal={closeModal}
            >
                <ProductCard product={isSelectedProduct}/>
                <button 
                    className="btn btn-dark position-absolute modal-btn" 
                    onClick={closeModal}
                >X</button>
            </Modal>
            <NewsLetter/>
        </motion.section>
    )
}
