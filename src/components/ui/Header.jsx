import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <header id="header" className="position-fixed">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg">
                    <h1 className="logo">NIKE</h1>
                    <ul className="navbar-nav main-nav">
                        <li className="nav-item"><a href="g.com" className="nav-link">Men</a></li>
                        <li className="nav-item"><a href="g.com" className="nav-link">Women</a></li>
                        <li className="nav-item"><a href="g.com" className="nav-link">Boys</a></li>
                        <li className="nav-item"><a href="g.com" className="nav-link">Girls</a></li>
                        <li className="nav-item"><a href="g.com" className="nav-link">New Arrivals</a></li>
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
