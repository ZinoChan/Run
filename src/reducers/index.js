import cartReducer from './cartReducer';
import appReducer from './appReducer';
import authReducer from './authReducer';
import productsReducer from './productsReducer';

const  rootReducer = {
    app: appReducer,
    cart: cartReducer,
    auth: authReducer,
    products: productsReducer

}

export default rootReducer;