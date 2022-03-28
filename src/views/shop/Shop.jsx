import { useEffect } from 'react';
import ProductsList from '../../components/shop/ProductsList';

import PreLoader from '../../components/ui/PreLoader';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../actions/productsActions';
import Skeleton from 'react-loading-skeleton';

export default function Shop() {
  const { products, authenticating, isLoading } = useSelector((state) => ({
    products: state.products,
    authenticating: !!state.app.isAuthenticating,
    isLoading: state.app.isLoading,
  }));

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
          <ProductsList products={products} />
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
