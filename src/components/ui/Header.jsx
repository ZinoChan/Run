import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import * as  ROUTES from '../../constants/routes';

export default function Header() {
    return (
        <header id="header" className="position-absolute">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg">
                    <h1 className="logo">NIKE</h1>
                    <ul className="navbar-nav main-nav">
                        <li className="nav-item"><NavLink to={ROUTES.MEN} className="nav-link">Men</NavLink ></li>
                        <li className="nav-item"><NavLink to={ROUTES.WOMEN} className="nav-link">Women</NavLink></li>
                        <li className="nav-item"><NavLink to={ROUTES.BOYS} className="nav-link">Boys</NavLink></li>
                        <li className="nav-item"><NavLink to={ROUTES.GIRLS} className="nav-link">Girls</NavLink></li>
                        <li className="nav-item"><NavLink to={ROUTES.NEW_ARRIVALS} className="nav-link">New Arrivals</NavLink></li>
                    </ul>
                    <ul className="navbar-nav ml-auto sub-nav">
                    <li className="header-icon"><FontAwesomeIcon icon={faSearch}/></li>
                        <li className="header-icon"><FontAwesomeIcon icon={faShoppingCart} /></li>
                        <li className="header-icon"><FontAwesomeIcon icon={faUser} /></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
