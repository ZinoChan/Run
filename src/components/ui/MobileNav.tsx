import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import * as ROUTES from '../../constants/routes';
import Badge from './Badge';
import { NavLink } from 'react-router-dom';
import { signInWithGoogle, signOutStart } from '@/reducers/authReducer';
import { useAppDispatch } from '@/store';

type Props = {
  openNav: boolean;
  auth: boolean;
  setOpenNav: (open: boolean) => void;
};

export default function MobileNav({ openNav, auth, setOpenNav }: Props) {
  const dispatch = useAppDispatch();
  const handleSignOut = () => {
    dispatch(signOutStart());
    setOpenNav(!openNav);
  };
  const handleSignIn = () => {
    dispatch(signInWithGoogle());
    setOpenNav(!openNav);
  };

  return (
    <nav
      className={`
        mobile-nav 
        align-items-center 
        justify-content-center 
        vh-100 vw-100
        ${openNav ? 'open' : ''}
    `}
    >
      <ul
        onClick={() => setOpenNav(!openNav)}
        className="navbar-nav text-center flex-column justify-content-center"
      >
        <li className="nav-item">
          <NavLink to={ROUTES.HOME} className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={ROUTES.SHOP} className="nav-link">
            Shop
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={ROUTES.CART} className="nav-icon position-relative">
            <FontAwesomeIcon icon={faBagShopping} />
            <Badge />
          </NavLink>
        </li>
        <li className="nav-item">
          {auth ? (
            <button className="btn mobile-btn" onClick={handleSignOut}>
              SignOut
            </button>
          ) : (
            <button className="btn mobile-btn" onClick={handleSignIn}>
              Register
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}
