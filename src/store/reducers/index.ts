import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { productsReducer } from "./productsReducer";
import { searchValueReducer } from './searchValueReducer'
import {pageReducer} from './pageReducer'
import { filterReducer } from "./filterReducer";

export const rootReducer = combineReducers({
    products: productsReducer,
    product: productReducer,
    pageOperations: pageReducer,
    search: searchValueReducer,
    filteredProducts: filterReducer,
})

export type RootState = ReturnType<typeof rootReducer>