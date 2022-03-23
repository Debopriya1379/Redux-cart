import {ActionTypes} from '../constants/actions-types';

export const setProducts = (products) => {
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload : products,
    };
}; 

export const selectedProducts = (products) => {
    return {
        type : ActionTypes.SELECTED_PRODUCT,
        payload : products,
    };
};

export const removeSelectedProduct = () => {
    return {
        type : ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
};

export const addToCart = (product) => {
    return {
        type : ActionTypes.ADD_TO_CART,
        payload : product,
    };
};