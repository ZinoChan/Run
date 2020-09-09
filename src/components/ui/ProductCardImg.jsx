import React from 'react'

export default function ProductCardImg({src,active,id, handleImgClick}) {

    const handleClick = (e) => handleImgClick(e, id);

    return (
        <img src={src} className={active ? "current" : ""} alt="shoe" onClick={handleClick}/>
    )
}
