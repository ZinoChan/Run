import { useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';

type Props = {
  src: string;
  alt: string;
  className: string;
};

const ImgLoader = ({ src, alt, className }: Props) => {
  const [loaded, setLoaded] = useState(false);

  const onLoad = () => setLoaded(true);

  return (
    <>
      {!loaded && (
        <LoadingOutlined
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            margin: 'auto',
            maxWidth: 30,
            maxHeight: 30,
          }}
        />
      )}

      <img
        alt={alt || ''}
        className={`${className || ''}`}
        onLoad={onLoad}
        src={src}
      />
    </>
  );
};

export default ImgLoader;
