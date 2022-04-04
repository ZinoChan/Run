export default function ProductCardColor({
  productColor,
  active,
  setSelectedColor,
}) {
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
