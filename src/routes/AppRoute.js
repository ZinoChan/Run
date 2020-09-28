import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { createBrowserHistory } from 'history';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import Home from '../views/home/Home';
import Shop from '../views/shop/Shop';
import Cart from '../views/cart/Cart';
import OrderDetails from '../views/checkout/OrderDetails';
import BillingDetails from '../views/checkout/BillingDetails';
import Payment from '../views/checkout/Payment';
import AccountDetails from '../views/account/AccountDetails';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from '../views/auth/Register';

export const history = createBrowserHistory();

export default function AppRoute() {
    return (
        <BrowserRouter>
        <ToastContainer autoClose={2000}/>
            <Switch>
                <PublicRoute exact path={ROUTES.HOME} component={Home}/>
                <PublicRoute  path={ROUTES.SHOP} component={Shop}/>
                <PublicRoute  path={ROUTES.CART} component={Cart}/>
                <PublicRoute  path={ROUTES.REGISTER} component={Register}/>
                <PrivateRoute path={ROUTES.CHECKOUT_STEP_1} component={OrderDetails}/>
                <PrivateRoute path={ROUTES.CHECKOUT_STEP_2} component={BillingDetails}/>
                <PrivateRoute path={ROUTES.CHECKOUT_STEP_3} component={Payment}/>
                <PublicRoute path={ROUTES.ACCOUNT_DETAILS} component={AccountDetails}/>
            </Switch>
        </BrowserRouter>
    )
}
