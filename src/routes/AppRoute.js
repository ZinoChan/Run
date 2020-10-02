import React from 'react'
import { Switch, useLocation } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import Home from '../views/home/Home';
import Shop from '../views/shop/Shop';
import Cart from '../views/cart/Cart';
import OrderDetails from '../views/checkout/OrderDetails';
import BillingDetails from '../views/checkout/BillingDetails';
import Payment from '../views/checkout/Payment';
import 'react-toastify/dist/ReactToastify.css';
import Register from '../views/auth/Register';
import NotFound from '../views/404/NotFound';
import { AnimatePresence } from 'framer-motion';



export default function AppRoute() {

    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
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
        </AnimatePresence>
    )
}
