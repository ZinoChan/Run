import { IProductRes } from '@/types/products.interface';
import ProductItem from './ProductItem';

export default function ProductsList({
  products,
}: {
  products: IProductRes[];
}) {
  return (
    <div className="product-list" style={{ marginBottom: '6rem' }}>
      <div className="container-fluid items-stretch">
        <div className="row">
          {products.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
