import { Sizes } from '@/types/products.interface';

type Props = {
  selectedSize: Sizes;
  active: boolean;
  setSelectedSize: (size: Sizes) => void;
};

export default function ProductCardSize({
  selectedSize,
  active,
  setSelectedSize,
}: Props) {
  const handleClick = () => setSelectedSize(selectedSize);

  return (
    <span
      className={`btn ms-2 btn-sm ${active ? 'btn-dark' : 'btn-outline-dark'}`}
      onClick={handleClick}
    >
      {selectedSize.size}
    </span>
  );
}
