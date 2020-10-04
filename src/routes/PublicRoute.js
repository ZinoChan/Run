import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/ui/Header';
import { HOME, CART, REGISTER} from '../constants/routes';
import { useSelector } from 'react-redux';
import Footer from '../components/ui/Footer';


export default function PublicRoute({component: Component,path, ...rest}) {


    const auth = useSelector(state => state.auth.id && state.auth.type === 'client');

    

    return (
        <Route {...rest} render={props => (
            
                    path === REGISTER && auth ?
                    <Redirect to={CART}/>
                    :
                    path === HOME ?
                    <> 
                        <Header theme="light" path={path}/>
                        
                        <Component {...props}/>
                    </>  
                     : 
                    <>  
                        <Header theme="dark" path={path}/>
                            <Component {...props}/>
                        <Footer/>                        
                    </>
        
        )}
       
       />
    )
}
