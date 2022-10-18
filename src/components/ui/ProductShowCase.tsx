import { ColorImg } from '@/types/products.interface';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const ProductShowCase = ({ imgs }: { imgs: ColorImg[] }) => {
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
