import { faStar, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCardColor from '../../components/ui/ProductCardColor';
import ProductCardSize from '../../components/ui/ProductCardSize';
import { useState } from 'react';
import ImageGallery from 'react-image-gallery';

const ProductDetails = () => {
  const { productId } = useParams();
  const currentProduct = useSelector((state) =>
    state.products.find((product) => product.id === productId)
  );

  const [selectedColor, setSelectedColor] = useState(
    currentProduct.availableColors[0]
  );
  const [selectedSize, setSelectedSize] = useState(
    currentProduct.availableSizes[0].size
  );

  const showCaseImages = selectedColor.imgs.map(({ img }) => ({
    original: img,
    thumbnail: img,
    originalHeight: 300,
    thumbnailHeight: 100,
  }));

  return (
    <section className="product-details position-relative">
      <div className="glass"></div>
      <div className="container-fluid">
        <div className="row g-5">
          <div className="col col-md-6">
            <div>
              <ImageGallery
                showFullscreenButton={false}
                showPlayButton={false}
                items={showCaseImages}
                thumbnailPosition="left"
              />
            </div>
          </div>
          <div className="col col-md-6">
            <div>
              <h2 className="fs-1 text-capitalize fw-bold mb-5">
                {currentProduct.title}
              </h2>

              <div className="mb-4">
                <p className="fs-6 fw-bold text-uppercase">description:</p>
                <p className="fs-6 text-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. enim
                  nemo veritatis aliquid eligendi quisquam vero? Esse, aliquid
                  culpa.
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
                {currentProduct.availableColors.map((productColor) => (
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
                {currentProduct.availableSizes.map(({ size, id }) => (
                  <ProductCardSize
                    key={id}
                    size={size}
                    setSelectedSize={setSelectedSize}
                    active={size === selectedSize}
                  />
                ))}
              </div>
            </div>
            <div className="d-flex items-center justify-content-between">
              <button className="btn btn-dark btn-lg flex items-center justify-between">
                <FontAwesomeIcon icon={faCartArrowDown} className="me-3" />
                <span>Place order</span>
              </button>
              <p className="fw-bold fs-1">{currentProduct.price}$</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
