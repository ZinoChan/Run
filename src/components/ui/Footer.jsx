import React from 'react';
import { NavLink } from 'react-router-dom';
import { TERMS_OF_USE } from '../../constants/routes';

export default function Footer() {
    return (
        <div className="footer d-flex justify-content-between align-items-center">
            <p>Developed by ZINO-CHAN</p>
            <div>
                <div className="logo">Run</div>
                <p>&copy; 2020</p>
            </div>
            <NavLink to={TERMS_OF_USE}>Terms of Use</NavLink>
        </div>
    )
}
