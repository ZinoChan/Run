import React from 'react';
import {
    ACCOUNT_DETAILS,
    ORDERS,
    WHISHLIST
} from '../../constants/routes';
import { NavLink } from 'react-router-dom';

export default function AccountNav() {
    return (
        <nav>
            <ul className="account-nav">
                <li className="nav-item">
                    <NavLink to={ACCOUNT_DETAILS}>Account Details</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={ORDERS}>Orders</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={WHISHLIST}>Whishlist</NavLink>
                </li>
            </ul>
        </nav>
    )
}
