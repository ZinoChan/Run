import { faStar, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import ProductCardColor from '../../components/ui/ProductCardColor';
import ProductCardSize from '../../components/ui/ProductCardSize';
import { useEffect, useState } from 'react';
import { doc } from 'firebase/firestore';
import { useDocumentOnce } from 'react-firebase-hooks/firestore';
import firebaseInstance from '../../firebase/firebase';
import ProductShowCase from '../../components/ui/ProductShowCase';
import useCart from '../../hooks/useCart';

const ProductDetails = () => {
  const { productId } = useParams();
  const { addItemToCart } = useCart();

  const [value, loading, error] = useDocumentOnce(
    doc(firebaseInstance.db, 'products', `${productId}`)
  );

  const [currentProduct, setCurrentProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    if (value) {
      setCurrentProduct(value.data());
      setSelectedColor(value.data().availableColors[0]);
      setSelectedSize(value.data().availableSizes[0]);
    }
  }, [value]);

  return (
    <section className="product-details position-relative">
      <div className="glass" />
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Document: Loading...</span>}
      {currentProduct && (
        <div className="container-fluid">
          <div className="row g-5">
            <div className="col col-md-6">
              <ProductShowCase imgs={selectedColor?.imgs} />
            </div>
            <div className="col col-md-6">
              <div>
                <h2 className="fs-1 text-capitalize fw-bold mb-5">
                  {currentProduct.title}
                </h2>

                <div className="mb-4">
                  <p className="fs-6 fw-bold text-uppercase">description:</p>
                  <p className="fs-6 text-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    enim nemo veritatis aliquid eligendi quisquam vero? Esse,
                    aliquid culpa.
                  </p>
                </div>
                <div className="mb-4">
                  <span className="fs-6 me-2 fw-bold text-uppercase">
                    Rating:
                  </span>
                  <span className="fs-6 text-body inline-block">
                    {new Array(5).fill('').map((star, index) => (
                      <FontAwesomeIcon
                        key={`star-${index}`}
                        icon={faStar}
                        className={`fs-6 ${
                          index === 5 ? 'text-muted' : 'text-warning'
                        }`}
                      />
                    ))}
                  </span>
                  <span className="fs-6 ms-2 fw-bold text-uppercase">
                    4.5 (50)
                  </span>
                </div>
              </div>
              <div>
                <div className=" d-flex align-items-center mb-4">
                  <span className="fs-6 text-body fw-bold me-2 ">Colors: </span>
                  {currentProduct?.availableColors.map((productColor) => (
                    <ProductCardColor
                      key={productColor.id}
                      productColor={productColor}
                      active={productColor.color === selectedColor.color}
                      setSelectedColor={setSelectedColor}
                    />
                  ))}
                </div>
                <div className="d-flex align-items-center mb-5">
                  <span className="fs-6 text-body fw-bold me-2">Sizes:</span>
                  {currentProduct.availableSizes.map((size) => (
                    <ProductCardSize
                      key={size.id}
                      selectedSize={size}
                      setSelectedSize={setSelectedSize}
                      active={size.id === selectedSize.id}
                    />
                  ))}
                </div>
              </div>
              <div className="d-flex items-center justify-content-between">
                <button
                  onClick={() =>
                    addItemToCart(currentProduct, selectedSize, selectedColor)
                  }
                  className="btn btn-dark btn-lg flex items-center justify-between"
                >
                  <FontAwesomeIcon icon={faCartArrowDown} className="me-3" />
                  <span>Place order</span>
                </button>
                <p className="fw-bold fs-1">{currentProduct.price}$</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetails;
