import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS
} from '../constants/constants';


export const getProducts = () => ({
    type: GET_PRODUCTS
});

export const getProductsSuccess = products => ({
    type: GET_PRODUCTS_SUCCESS,
    payload: products
});