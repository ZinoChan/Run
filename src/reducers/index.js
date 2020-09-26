import cartReducer from './cartReducer';
import appReducer from './appReducer';
import authReducer from './authReducer';


const  rootReducer = {
    app: appReducer,
    cart: cartReducer,
    auth: authReducer

}

export default rootReducer;