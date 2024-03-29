import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBagShopping,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Badge from './Badge';
import MobileNav from './MobileNav';
import { useState } from 'react';
import { useAppSelector } from '@/store';

export default function Header({ theme = 'null' }) {
  const [openNav, setOpenNav] = useState(false);
  const { auth } = useAppSelector((state) => ({
    auth: !!state.auth.id && state.auth.type === 'client',
  }));

  const onToggleNav = () => setOpenNav(!openNav);

  return (
    <>
      <header id="header" className={` w-100 ${theme}`}>
        <div className="container-fluid">
          <nav className="navbar align-items-center justify-content-between">
            <h1 className="logo  m-0">
              <NavLink to={ROUTES.HOME} className="nav-link text-dark">
                <span>Run</span>
              </NavLink>
            </h1>
            <div className="toggler" onClick={onToggleNav}>
              {openNav ? (
                <FontAwesomeIcon icon={faTimes} />
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
              <div>
                <NavLink
                  to={ROUTES.CART}
                  className="header-icon text-body mx-4 position-relative"
                >
                  <FontAwesomeIcon icon={faBagShopping} />
                  <Badge />
                </NavLink>

                {auth ? (
                  <Link className="text-dark" to={ROUTES.PROFILE}>
                    <button className="btn btn-outline-dark btn-sm ">
                      profile
                    </button>
                  </Link>
                ) : (
                  <Link className="text-dark" to={ROUTES.REGISTER}>
                    <button className="btn btn-outline-dark btn-sm ">
                      Register
                    </button>
                  </Link>
                )}
              </div>
            </ul>
          </nav>
        </div>
      </header>
      <MobileNav openNav={openNav} auth={auth} setOpenNav={setOpenNav} />
    </>
  );
}
