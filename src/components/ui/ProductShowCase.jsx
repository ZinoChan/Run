import ImageGallery from 'react-image-gallery';

const ProductShowCase = ({ imgs }) => {
  const showCaseImages = imgs?.map(({ img }) => ({
    original: img,
    thumbnail: img,
  }));
  return (
    <ImageGallery
      showFullscreenButton={false}
      showPlayButton={false}
      items={showCaseImages}
      thumbnailPosition="left"
    />
  );
};

export default ProductShowCase;
