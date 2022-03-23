import { combineReducers } from "redux";
import {productsReducer,selectedProductsReducer,cartProductsReducer} from '../reducers/productReducer'

const reducers = combineReducers({
    allProducts : productsReducer,
    product : selectedProductsReducer,
    cartProducts : cartProductsReducer,
});

export default reducers;