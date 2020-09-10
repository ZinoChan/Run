import React, {useState} from 'react'
import Filter from '../../components/ui/Filter';
import ProductsList from '../../components/shop/ProductsList';
import NewsLetter from '../../components/ui/NewsLetter';
import Banner from '../../components/ui/Banner';
import Modal from '../../components/ui/Modal';
import ProductCard from '../../components/ui/ProductCard';

export default function NewArrivals() {
    const [isOpenModal, setOpenModal] = useState(false);

    const openModal = () => setOpenModal(true);

    const closeModal = () => setOpenModal(false);

    return (
        <main id="new-arrivals">
            <Banner title="New Arrivals"/>
            <Filter/>
            <ProductsList
                openModal={openModal}
            />
            <Modal
                isOpen={isOpenModal}
                closeModal={closeModal}
            >
                <ProductCard/>
                <button 
                    className="btn btn-dark position-absolute modal-btn" 
                    onClick={closeModal}
                >X</button>
            </Modal>
            <NewsLetter/>
        </main>
    )
}
