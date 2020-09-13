import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { createBrowserHistory } from 'history';

import Home from '../views/home/Home';
import Shop from '../views/shop/Shop';
import PublicRoute from './PublicRoute';
import Register from '../views/auth/Register';
import Login from '../views/auth/Login';
import Cart from '../views/cart/Cart';
import OrderDetails from '../views/checkout/OrderDetails';
import BillingDetails from '../views/checkout/BillingDetails';
import Payment from '../views/checkout/Payment';

export const history = createBrowserHistory();

export default function AppRoute() {
    return (
        <BrowserRouter>
            <Switch>
                <PublicRoute exact path={ROUTES.HOME} component={Home}/>
                <PublicRoute  path={ROUTES.SHOP} component={Shop}/>
                <PublicRoute  path={ROUTES.CART} component={Cart}/>
                <PublicRoute  path={ROUTES.REGISTER} component={Register}/>
                <PublicRoute  path={ROUTES.LOGIN} component={Login}/>
                <PublicRoute path={ROUTES.CHECKOUT_STEP_1} component={OrderDetails}/>
                <PublicRoute path={ROUTES.CHECKOUT_STEP_2} component={BillingDetails}/>
                <PublicRoute path={ROUTES.CHECKOUT_STEP_3} component={Payment}/>
            </Switch>
        </BrowserRouter>
    )
}
