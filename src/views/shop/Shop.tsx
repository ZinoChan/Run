import { useEffect } from 'react';
import ProductsList from '@/components/shop/ProductsList';
import PreLoader from '@/components/ui/PreLoader';
import { useAppSelector, useAppDispatch } from '@/store';
import { getProductsStart } from '@/reducers/productsReducer';

export default function Shop() {
  const { products, isLoading } = useAppSelector((state) => ({
    products: state.products,
    isLoading: state.app.loading,
  }));

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProductsStart());
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
