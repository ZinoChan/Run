import React, {Suspense, lazy} from 'react'
import { Switch, useLocation } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import 'react-toastify/dist/ReactToastify.css';
import { AnimatePresence } from 'framer-motion';
import PreLoader from '../components/ui/PreLoader';

const Home = lazy(() => import('../views/home/Home'));
const Shop = lazy(() => import('../views/shop/Shop'));
const Cart = lazy(() => import('../views/cart/Cart'));
const OrderDetails = lazy(() => import('../views/checkout/OrderDetails'));
const BillingDetails = lazy(() => import('../views/checkout/BillingDetails'));
const Payment = lazy(() => import('../views/checkout/Payment'));
const Register = lazy(() => import('../views/auth/Register'));
const NotFound = lazy(() => import('../views/404/NotFound'));


export default function AppRoute() {

    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Suspense fallback={<PreLoader theme="light"/>}>
                <Switch location={location} key={location.pathname}>
                    <PublicRoute exact path={ROUTES.HOME} component={Home}/>
                    <PublicRoute  path={ROUTES.SHOP} component={Shop}/>
                    <PublicRoute  path={ROUTES.CART} component={Cart}/>
                    <PublicRoute  path={ROUTES.REGISTER} component={Register}/>
                    <PrivateRoute path={ROUTES.CHECKOUT_STEP_1} component={OrderDetails}/>
                    <PrivateRoute path={ROUTES.CHECKOUT_STEP_2} component={BillingDetails}/>
                    <PrivateRoute path={ROUTES.CHECKOUT_STEP_3} component={Payment}/>
                    <PublicRoute component={NotFound}/>
                </Switch>
            </Suspense>
        </AnimatePresence>
    )
}
