import React from 'react'

export default function ProductCardColor({color,active, handleColorClick, id}) {
    const handleClick = () => {
        handleColorClick(id);

    }
    return (
       <span className={active ? "current" : ""} style={{backgroundColor: `${color}`, borderColor: `${color}`}} onClick={handleClick}></span>
    )
}
