import { GET_PRODUCTS_SUCCESS } from '../constants/constants';


export default (state= [], action) => {
    switch(action.type){
        case GET_PRODUCTS_SUCCESS:
            return [
                ...state,
                ...action.payload
            ]
        default: 
            return state;
    }
}