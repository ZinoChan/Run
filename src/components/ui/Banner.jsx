import React from 'react'

export default function Banner({title}) {
    return (
        <div className="banner d-flex align-items-center">
                <div className="container-fluid ">
                    <div className="banner-text">
                        <h1>{title}</h1>
                    </div>
                </div>
        </div>
    )
}
