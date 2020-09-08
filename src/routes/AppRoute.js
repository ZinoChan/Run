import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { createBrowserHistory } from 'history';

import Home from '../views/home/Home';
import NewArrivals from '../views/shop/NewArrivals';
import Men from '../views/shop/Men';
import Women from '../views/shop/Women';
import Boys from '../views/shop/Boys';
import Girls from '../views/shop/Girls';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

export default function AppRoute() {
    return (
        <BrowserRouter>
            <Switch>
                <PublicRoute exact path={ROUTES.HOME} component={Home}/>
                <PublicRoute  path={ROUTES.NEW_ARRIVALS} component={NewArrivals}/>
                <PublicRoute  path={ROUTES.MEN} component={Men}/>
                <PublicRoute  path={ROUTES.WOMEN} component={Women}/>
                <PublicRoute  path={ROUTES.BOYS} component={Boys}/>
                <PublicRoute  path={ROUTES.GIRLS} component={Girls}/>
            </Switch>
        </BrowserRouter>
    )
}
