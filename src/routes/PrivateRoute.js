import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { REGISTER } from '../constants/routes';
import { useSelector } from 'react-redux';



export default function PrivateRoute({component: Component,path, ...rest}) {

    
    const auth = useSelector(state => state.auth.id && state.auth.type);
    

    return (
        <Route {...rest} render={props => (
                
                   auth ?
                    <Component/>
                    :
                    <Redirect to={REGISTER}/>
                    
        
        )}
       
       />
    )
}