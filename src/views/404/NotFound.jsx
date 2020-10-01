import React from 'react'
import { NavLink } from 'react-router-dom'
import { HOME } from '../../constants/routes';

export default function NotFound() {
    return (
        <div className="not-found min-vh-100">
            <div className="container d-flex align-items-center justify-content-center flex-column vh-100">
                <div className="_404 text-black">404</div>
                <div className="not-found-text">
                    <h1 >Oops</h1>
                    <p className="mb-5"> the ppage you looking for doesn't exist</p>
                    <NavLink to={HOME} className="btn btn-dark">Back To HomePage</NavLink>
                </div>
            </div>
        </div>
    )
}
