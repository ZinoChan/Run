import { useState } from 'react';

const ImgLoader = ({ src, alt, className, height = 'auto' }) => {
  const [loaded, setLoaded] = useState(false);

  const onLoad = () => setLoaded(true);

  return (
    <>
      {!loaded && (
        <div
          style={{ height: height }}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="spinner-border text-dark">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
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
