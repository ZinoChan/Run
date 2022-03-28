import React from 'react';

export default function PreLoader({ theme }) {
  return (
    <div
      className={`
                    preloader 
                    d-flex 
                    justify-content-center 
                    align-items-center 
                    vh-100 vw-100 ${theme}
                    `}
    >
      Loading...
    </div>
  );
}
