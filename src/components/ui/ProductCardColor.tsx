import { Colors } from '@/types/products.interface';

type Props = {
  productColor: Colors;
  active: boolean;
  setSelectedColor: (color: Colors) => void;
};

export default function ProductCardColor({
  productColor,
  active,
  setSelectedColor,
}: Props) {
  const handleClick = () => {
    setSelectedColor(productColor);
  };
  return (
    <span
      className={`product-colors me-2 ${active ? 'active-color' : ''}`}
      style={{
        backgroundColor: `${productColor?.color}`,
        outlineColor: `${productColor?.color}`,
      }}
      onClick={handleClick}
    ></span>
  );
}
