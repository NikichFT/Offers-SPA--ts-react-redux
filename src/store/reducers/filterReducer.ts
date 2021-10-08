import { FilteredActions, FliteredProductsActionTypes, FliteredProductsState } from '../types/filteredProductsTypes'
import {ProductsState, ProductsAction, ProductsActionTypes} from '../types/productTypes'

const initialState = {
    filteredProducts: [],
}

export const filterReducer = (state: FliteredProductsState = initialState, action: FilteredActions): FliteredProductsState => {
    switch (action.type) {
        case FliteredProductsActionTypes.SET_FILTER_PRODUCTS : 
            return {...state, filteredProducts: action.payload}
        default: 
            return state
    }
}