import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { REGISTER } from '../constants/routes';




export default function PrivateRoute({component: Component,path, ...rest}) {

    
    const auth = useSelector(state => state.auth.id && state.auth.type === 'client');
    

    return (
        <Route {...rest} render={props => (
                
                   auth ?
                    <Component {...props}/>
                    :
                    <>
                        <Redirect to={REGISTER}/>
                    </>
        
        )}
       
       />
    )
}