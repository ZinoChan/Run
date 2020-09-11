import React from 'react'
import { Route } from 'react-router-dom';
import Header from '../components/ui/Header';
import { HOME } from '../constants/routes';

export default function PublicRoute({component: Component,path, ...rest}) {
    return (
        <Route {...rest} render={props => (
                
                    path === HOME ?
                    <> 
                        <Header theme="light"/>
                        <Component {...props}/>
                    </>  
                     : 
                    <>  
                        <Header theme="dark"/>
                        <Component {...props}/>
                    </>
        
        )}
       
       />
    )
}
