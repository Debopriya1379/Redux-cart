import {ActionTypes} from '../constants/actions-types'

const initialState = {
    products : [],
};

export const productsReducer = (state = initialState, {type,payload}) => {
    switch(type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products : payload };
        default :
            return state;
    }
};

export const selectedProductsReducer = (state = initialState, {type,payload}) => {
    switch(type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_PRODUCT :
            return {};
        default :
            return state;
    }
};

export const cartProductsReducer = (state = initialState, {type,payload}) => {
    switch(type) {
        case ActionTypes.ADD_TO_CART:
            state.products.push(payload.product);
            return {
                ...state,
            }
        default :
            return state;
    }
};