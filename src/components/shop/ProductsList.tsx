import { IProductRes } from '@/types/products.interface';
import ProductItem from './ProductItem';

interface ProductsListProps {
  products: IProductRes[];
}

const ProductsList: React.FC<ProductsListProps> = ({ products }) => (
  <div className="product-list" style={{ marginBottom: '6rem' }}>
    <div className="container-fluid items-stretch">
      <div className="row">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  </div>
);

export default ProductsList;

