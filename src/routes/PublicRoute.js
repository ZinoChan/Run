import React from 'react'
import { Route } from 'react-router-dom';
import Header from '../components/ui/Header';

export default function PublicRoute({component: Component, ...rest}) {
    return (
        <Route {...rest} render={props => (
            <>
                <Header/>
                <Component {...props}/>
            </>
        )}
       
       />
    )
}
