import React from 'react';

type Props = {
  src: string;
  active: boolean;
  id: string;
  handleImgClick: (e: React.MouseEvent<HTMLImageElement>, id: string) => void;
};

export default function ProductCardImg({
  src,
  active,
  id,
  handleImgClick,
}: Props) {
  const handleClick = (e: React.MouseEvent<HTMLImageElement>) =>
    handleImgClick(e, id);

  return (
    <img
      src={src}
      className={active ? 'current' : ''}
      alt="shoe"
      onClick={handleClick}
    />
  );
}
