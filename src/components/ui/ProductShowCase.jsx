import ImageGallery from 'react-image-gallery';

const ProductShowCase = ({ imgs }) => {
  const showCaseImages = imgs?.map(({ img }) => ({
    original: img,
    thumbnail: img,
  }));
  return (
    <ImageGallery
      showPlayButton={false}
      items={showCaseImages}
      thumbnailPosition="left"
      lazyLoad
      showNav={false}
    />
  );
};

export default ProductShowCase;
