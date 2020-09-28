import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, /*faUser*/ } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import * as  ROUTES from '../../constants/routes';
import Badge from './Badge';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../../actions/authActions';
import { signInWithGoogle } from '../../actions/authActions';



export default function Header({theme, path}) {

    const auth = useSelector(state => state.auth.id && state.auth.type);

    const dispatch = useDispatch();

    const handleSignOut = () => dispatch(signOut());
    const handleSignIn = () => dispatch(signInWithGoogle());

    return (
        <header id="header" className={`position-absolute ${theme}`}>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg align-items-center">
                    <h1 className="logo m-0"><NavLink to={ROUTES.HOME} className="nav-link">NIKE</NavLink></h1>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><NavLink to={ROUTES.HOME} className="nav-link">Home</NavLink ></li>
                        <li className="nav-item"><NavLink to={ROUTES.SHOP} className="nav-link mx-3">Shop</NavLink ></li>
                        <NavLink to={ROUTES.CART} className="header-icon mr-3">
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <Badge/>    
                        </NavLink>
                    </ul>
                    {/* <NavLink to={ROUTES.REGISTER} className="header-icon"><FontAwesomeIcon icon={faUser} /></NavLink> */}
                    {
                        path === ROUTES.REGISTER ? 
                        ""
                        :
                        auth ? 
                        <button className="btn btn-dark" onClick={handleSignOut}>SignOut</button>
                        :
                        <button className="btn btn-dark" onClick={handleSignIn}>Register</button>
                    }
                    

                </nav>
            </div>
        </header>
    )
}
