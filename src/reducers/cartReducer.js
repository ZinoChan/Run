import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    ADD_QTY,
    MINUS_QTY,
    CLEAR_CART
} from '../constants/constants';


const cartReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return state.some(item => (
                item.id === action.payload.id && item.size.id === action.payload.size.id
            ))
                ? state : [...state, action.payload]

        case REMOVE_FROM_CART:
            return state.filter(item => item.id !== action.payload);

        case ADD_QTY:
            return state.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                }
                return item;
            })

        case MINUS_QTY:
            return state.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    }
                }
                return item;
            });

        case CLEAR_CART:
            return []

        default:
            return state;
    }
}


export default cartReducer;