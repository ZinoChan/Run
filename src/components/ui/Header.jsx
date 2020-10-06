import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import * as  ROUTES from '../../constants/routes';
import Badge from './Badge';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../../actions/authActions';
import { signInWithGoogle } from '../../actions/authActions';
import { motion } from 'framer-motion';
import MobileNav from './MobileNav';
import { useState } from 'react';



export default function Header({theme, path}) {

    const [openNav, setOpenNav] = useState(false);

    const auth = useSelector(state => state.auth.id && state.auth.type);

    const dispatch = useDispatch();

    const handleSignOut = () => dispatch(signOut());
    const handleSignIn = () => dispatch(signInWithGoogle());

    const onToggleNav = () => setOpenNav(!openNav);

    return (
        <>
        <motion.header 
            id="header" 
            className={`position-absolute ${theme}`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: .3,
                delay: .5
            }}
        >
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg align-items-center">
                    <h1 className="logo m-0"><NavLink to={ROUTES.HOME} className="nav-link"></NavLink></h1>
                    <div 
                        className="toggler ml-auto"
                        onClick={onToggleNav}
                    >
                       {openNav ? 
                            <FontAwesomeIcon icon={faTimes} className="text-white"/>
                            :
                            <FontAwesomeIcon icon={faBars}/>
                        }
                    </div>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><NavLink to={ROUTES.HOME} className="nav-link">Home</NavLink ></li>
                        <li className="nav-item"><NavLink to={ROUTES.SHOP} className="nav-link ml-3">Shop</NavLink ></li>
                        <li className="nav-item mx-3 d-flex align-items-center">
                            <NavLink to={ROUTES.CART} className="header-icon position-relative">
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
                            <button className="btn btn-dark" onClick={handleSignOut}>SignOut</button>
                            :
                            <button className="btn btn-dark" onClick={handleSignIn}>Register</button>
                        }
                        </li>
                    </ul>
                </nav>
            </div>
        </motion.header>
        <MobileNav 
            openNav={openNav}
            dispatch={dispatch}
            auth={auth}
            path={path}
            setOpenNav={setOpenNav}
        /> 
        </>
    )
}
