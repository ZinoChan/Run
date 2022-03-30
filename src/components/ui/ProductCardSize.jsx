export default function ProductCardSize({
  selectedSize,
  active,
  setSelectedSize,
}) {
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
