import { faStar, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import ProductCardColor from '@/components/ui/ProductCardColor';
import ProductCardSize from '@/components/ui/ProductCardSize';
import { useEffect, useState } from 'react';
import ProductShowCase from '@/components/ui/ProductShowCase';
import useCart from '@/hooks/useCart';
import PreLoader from '@/components/ui/PreLoader';
import { Colors, IProductRes, Sizes } from '@/types/products.interface';
import { useDocument } from 'swr-firestore-v9';

const ProductDetails = () => {
  const { productId } = useParams();
  const { addItemToCart } = useCart();
  const { data, error } = useDocument<IProductRes>(`products/${productId}`);

  const [currentProduct, setCurrentProduct] = useState<IProductRes | undefined>(
    undefined
  );
  const [selectedColor, setSelectedColor] = useState<Colors | null>(null);
  const [selectedSize, setSelectedSize] = useState<Sizes | null>(null);

  useEffect(() => {
    if (data) {
      setCurrentProduct(data);
      setSelectedColor(data.availableColors[0]);
      setSelectedSize(data.availableSizes[0]);
    }
  }, [data]);

  return (
    <section className="product-details position-relative">
      <div className="glass" />
      {error && <strong>An Error Acurred Please Try Again Later</strong>}
      {!data && <PreLoader />}
      {currentProduct && (
        <div className="container-fluid">
          <div className="row g-5">
            <div className="col-xl-6 col-sm-12">
              {selectedColor && <ProductShowCase imgs={selectedColor.imgs} />}
            </div>
            <div className="col-xl-6 col-sm-12">
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
                      active={productColor.color === selectedColor?.color}
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
                      active={size.id === selectedSize?.id}
                    />
                  ))}
                </div>
              </div>
              <div className="d-flex items-center justify-content-between">
                <button
                  onClick={
                    selectedSize && selectedColor
                      ? () =>
                          addItemToCart(
                            currentProduct,
                            selectedSize,
                            selectedColor
                          )
                      : undefined
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
