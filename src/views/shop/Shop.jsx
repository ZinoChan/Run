import { useState, useEffect } from 'react';
import ProductsList from '../../components/shop/ProductsList';
import Modal from '../../components/ui/Modal';
import ProductCard from '../../components/ui/ProductCard';
import PreLoader from '../../components/ui/PreLoader';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../actions/productsActions';
import Skeleton from 'react-loading-skeleton';

export default function Shop() {
  const [isOpenModal, setOpenModal] = useState(false);
  const [isSelectedProduct, setSelectedProduct] = useState(null);

  const selectedProduct = (product) => setSelectedProduct(product);

  const openModal = () => setOpenModal(true);

  const closeModal = () => setOpenModal(false);

  const { products, cart, authenticating, isLoading } = useSelector(
    (state) => ({
      cart: state.cart,
      products: state.products,
      authenticating: !!state.app.isAuthenticating,
      isLoading: state.app.isLoading,
    })
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProducts());
    }
  }, [dispatch, products.length]);

  return (
    <section id="shop">
      {authenticating ? <PreLoader theme="light" /> : null}

      {!isLoading && products.length > 0 && (
        <>
          <ProductsList
            openModal={openModal}
            selectedProduct={selectedProduct}
            products={products}
          />
          <Modal isOpen={isOpenModal} closeModal={closeModal}>
            <ProductCard
              product={isSelectedProduct}
              cart={cart}
              dispatch={dispatch}
            />
            <button
              className="btn btn-dark position-absolute modal-btn"
              onClick={closeModal}
            >
              X
            </button>
          </Modal>
        </>
      )}
      {isLoading &&
        new Array(9).fill({}).map((item, index) => (
          <div className="col-xl-4 col-md-6 col-xs-12 mb-4" key={index}>
            <Skeleton height={200} />
            <Skeleton count={3} />
          </div>
        ))}
    </section>
  );
}
