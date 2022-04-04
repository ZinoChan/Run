import { useEffect } from 'react';
import ProductsList from '../../components/shop/ProductsList';
import PreLoader from '../../components/ui/PreLoader';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../actions/productsActions';

export default function Shop() {
  const { products, isLoading } = useSelector((state) => ({
    products: state.products,
    isLoading: state.app.loading,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProducts());
    }
  }, [dispatch, products.length]);

  return (
    <section id="shop">
      {isLoading && <PreLoader />}

      {!isLoading && products.length > 0 && (
        <>
          <ProductsList products={products} />
        </>
      )}
    </section>
  );
}
