export default function ProductCardSize({ size, active, setSelectedSize }) {
  const handleClick = () => setSelectedSize(size);

  return (
    <span
      className={`btn ms-2 btn-sm ${active ? 'btn-dark' : 'btn-outline-dark'}`}
      onClick={handleClick}
    >
      {size}
    </span>
  );
}
