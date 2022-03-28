import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ProductItem({ product }) {
  const child = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div className="col-xl-3 col-md-4 col-xs-12 mb-4" variants={child}>
      <Link to={`/${product.id}`}>
        <div className="product-item h-100 text-center">
          <div className="card h-100 position-relative">
            <img
              src={product.item}
              className="card-img image-fluid mx-auto"
              alt="shoe"
            />
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
                        className={`fs-6 ${
                          index === 5 ? 'text-muted' : 'text-dark'
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
    </motion.div>
  );
}
