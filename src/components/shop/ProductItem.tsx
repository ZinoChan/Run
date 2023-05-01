import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ImgLoader from '../ui/ImgLoader';
import { IProductRes } from '@/types/products.interface';

export default function ProductItem({ product }: { product: IProductRes }) {
  return (
    <div className="col-xl-3 col-md-4 col-xs-12 mb-4">
      <Link to={`/${product.id}`}>
        <div className="product-item h-100 text-center">
          <div className="card h-100 position-relative">
            <div style={{ minHeight: "110px" }}>
              <ImgLoader
                alt={product.title}
                src={product.item}
                className="image-fluid mx-auto"
              />
            </div>
            <div className="card-body">
              <div className="item-info">
                <div className="d-flex items-center justify-content-between">
                  <p className="item-title mb-1 fw-bold text-capitalize text-dark fs-6">
                    {product.title}
                  </p>
                  <p className="item-title mb-1 fw-bold text-dark fs-6">
                    ${product.price}
                  </p>
                </div>
                <div className="d-flex items-center justify-content-between">
                  <p className="item-title mb-1 fw-bold text-capitalize text-dark fs-6">
                    {new Array(5).fill('').map((star, index) => (
                      <FontAwesomeIcon
                        key={`star-${index}`}
                        icon={faStar}
                        className={`fs-6 ${index === 5 ? 'text-muted' : 'text-dark'
                          }`}
                      />
                    ))}
                  </p>
                  <p className="item-title mb-1 fw-bold text-muted fs-6">
                    {product.availableColors.length}
                    <span className="mx-1">COLORS</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
