import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import  * as ROUTES from '../../constants/routes';
import Badge from './Badge';

import { signOut } from '../../actions/authActions';
import { signInWithGoogle } from '../../actions/authActions';
import { NavLink } from 'react-router-dom';


export default function MobileNav({openNav, path, dispatch, auth, setOpenNav}) {
    

    const handleSignOut = () => {
        dispatch(signOut())
        setOpenNav(!openNav);
    };
    const handleSignIn = () => {
        dispatch(signInWithGoogle());
        setOpenNav(!openNav);
    }

    

    return (
        <nav 
            className={`
                mobile-nav 
                align-items-center 
                justify-content-center 
                vh-100 vw-100
                ${openNav ? 'open' : ''}
                `
            }
            
        >
             <ul className="navbar-nav text-center flex-column justify-content-center">
                <li className="nav-item"><NavLink to={ROUTES.HOME} className="nav-link">Home</NavLink ></li>
                <li className="nav-item"><NavLink to={ROUTES.SHOP} className="nav-link">Shop</NavLink ></li>
                <li className="nav-item">
                    <NavLink to={ROUTES.CART} className="nav-icon position-relative">
                        <FontAwesomeIcon icon={faShoppingCart}/>
                        <Badge/>    
                    </NavLink>
                </li>
                <li className="nav-item">
                {
                    path === ROUTES.REGISTER ? 
                    ""
                    :
                    auth ? 
                    <button className="btn mobile-btn" onClick={handleSignOut}>SignOut</button>
                    :
                    <button className="btn mobile-btn" onClick={handleSignIn}>Register</button>
                }
                </li>
            </ul>
        </nav>
    )
}
