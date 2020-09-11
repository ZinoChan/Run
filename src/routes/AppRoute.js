import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { createBrowserHistory } from 'history';

import Home from '../views/home/Home';
import Shop from '../views/shop/Shop';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

export default function AppRoute() {
    return (
        <BrowserRouter>
            <Switch>
                <PublicRoute exact path={ROUTES.HOME} component={Home}/>
                <PublicRoute  path={ROUTES.SHOP} component={Shop}/>
            </Switch>
        </BrowserRouter>
    )
}
