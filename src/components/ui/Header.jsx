import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import * as  ROUTES from '../../constants/routes';
import { useState } from 'react';


export default function Header({theme}) {

    const [openNav, setOpenNav] = useState(false);

    const toggleNavbar = () => setOpenNav(!openNav);

    return (
        <header id="header" className={`position-absolute ${theme}`}>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg align-items-center">
                    <h1 className="logo m-0"><NavLink to={ROUTES.HOME} className="nav-link">NIKE</NavLink></h1>
                    <ul className={`navbar-nav ml-auto ${openNav ? "open" : ""}`}>
                        <li className="nav-item"><NavLink to={ROUTES.HOME} className="nav-link">Home</NavLink ></li>
                        <li className="nav-item"><NavLink to={ROUTES.SHOP} className="nav-link mx-3">Shop</NavLink ></li>
                    </ul>
                    <NavLink to={ROUTES.REGISTER} className="header-icon"><FontAwesomeIcon icon={faUser} /></NavLink>
                    <NavLink to={ROUTES.CART} className="header-icon ml-3"><FontAwesomeIcon icon={faShoppingCart} /></NavLink>
                    {/* <div className="toggler header-icon" onClick={toggleNavbar}>
                        <FontAwesomeIcon icon={faBars} />
                    </div> */}

                </nav>
            </div>
        </header>
    )
}
