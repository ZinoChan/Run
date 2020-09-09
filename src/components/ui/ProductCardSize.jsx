import React from 'react'

export default function ProductCardSize({size,id, active, handleSizeClick}) {
    
    const handleClick = () => handleSizeClick(id);

    return (
        <span className={active ? "current" : ""} onClick={handleClick}>{size}</span>
    )
}
