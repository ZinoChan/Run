import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    ADD_QTY,
    MINUS_QTY,
    CLEAR_CART
} from '../constants/constants';

export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: item
});

export const removeFromCart = id => ({
    type: REMOVE_FROM_CART,
    payload: id
});

export const addQty = id => ({
    type: ADD_QTY,
    payload: id
});

export const minusQty = id => ({
    type: MINUS_QTY,
    payload: id
});

export const clearCart = () => ({
    type: CLEAR_CART
});