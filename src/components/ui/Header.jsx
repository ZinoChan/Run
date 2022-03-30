import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBagShopping,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Badge from './Badge';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../../actions/authActions';
import { signInWithGoogle } from '../../actions/authActions';
import MobileNav from './MobileNav';
import { useState } from 'react';

export default function Header({ theme = 'null', path }) {
  const [openNav, setOpenNav] = useState(false);

  const { auth, isAuthenticating } = useSelector((state) => ({
    auth: state.auth.id && state.auth.type,
    isAuthenticating: state.app.isAuthenticating,
  }));

  const dispatch = useDispatch();

  const handleSignOut = () => dispatch(signOut());
  const handleSignIn = () => dispatch(signInWithGoogle());

  const onToggleNav = () => setOpenNav(!openNav);

  return (
    <>
      <header id="header" className={` w-100 ${theme}`}>
        <div className="container-fluid">
          <nav className="navbar align-items-center justify-content-between">
            <h1 className="logo m-0">
              <NavLink to={ROUTES.HOME} className="nav-link"></NavLink>
            </h1>
            <div className="toggler" onClick={onToggleNav}>
              {openNav ? (
                <FontAwesomeIcon icon={faTimes} className="text-white" />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mx-4">
                <NavLink to={ROUTES.HOME} className="nav-link text-body">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={ROUTES.SHOP} className="nav-link text-body">
                  Shop
                </NavLink>
              </li>
            </ul>
            <div>
              <NavLink
                to={ROUTES.CART}
                className="header-icon text-body mx-4 position-relative"
              >
                <FontAwesomeIcon icon={faBagShopping} />
                <Badge />
              </NavLink>

              {!isAuthenticating ? (
                auth ? (
                  <button
                    className="btn btn-outline-dark btn-sm"
                    onClick={handleSignOut}
                  >
                    SignOut
                  </button>
                ) : (
                  <button
                    className="btn btn-outline-dark btn-sm "
                    onClick={handleSignIn}
                  >
                    Register
                  </button>
                )
              ) : (
                <button
                  className=" btn btn-outline-dark btn-sm"
                  style={{ width: 80 }}
                >
                  <span className="spinner-border spinner-border-sm">
                    <span className="visually-hidden">Loading...</span>
                  </span>
                </button>
              )}
            </div>
          </nav>
        </div>
      </header>
      <MobileNav
        openNav={openNav}
        dispatch={dispatch}
        auth={auth}
        path={path}
        setOpenNav={setOpenNav}
      />
    </>
  );
}
