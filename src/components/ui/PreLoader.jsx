import React from 'react';
import {Ripple} from 'react-spinners-css';


export default function PreLoader({theme}) {
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
            <Ripple color={theme === "red" ? "#fff" : "crimson"} />
        </div>
    )
}
