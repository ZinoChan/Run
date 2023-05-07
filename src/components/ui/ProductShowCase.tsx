import { ColorImg } from '@/types/products.interface';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImgLoader from './ImgLoader';

const ProductShowCase = ({ imgs }: { imgs: ColorImg[] }) => {
  const showCaseImages = imgs?.map(({ img }) => ({
    original: img,
    thumbnail: img,
  }));
  const renderItem = (item: ReactImageGalleryItem) => (
    <ImgLoader
      src={item.original}
      alt={item.originalAlt ? item.originalAlt : "gallery-img"}
      className='image-gallery-image'
    />
  )
  const renderThumbInner = (item: ReactImageGalleryItem) => (
    <ImgLoader
      src={item.thumbnail ? item.thumbnail : ''}
      alt={item.thumbnailAlt ? item.thumbnailAlt : "thumbnail_img"}
      className="image-gallery-thumbnail-image"
    />
  );
  return (
    <ImageGallery
      showPlayButton={false}
      items={showCaseImages}
      thumbnailPosition="left"
      lazyLoad
      showNav={false}
      renderItem={renderItem}
      renderThumbInner={renderThumbInner}
    />
  );
};

export default ProductShowCase;
