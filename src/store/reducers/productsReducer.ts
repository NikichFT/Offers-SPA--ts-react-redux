import {ProductsState, ProductsAction, ProductsActionTypes} from '../types/productTypes'

const initialState = {
    products: [],
    loading: false,
    error: null
}

export const productsReducer = (state: ProductsState = initialState, action: ProductsAction): ProductsState => {
    switch (action.type) {
        case ProductsActionTypes.FETCH_PRODUCTS : 
            return {loading: true, error: null, products: [...state.products]}
        case ProductsActionTypes.FETCH_PRODUCTS_SUCCESS : 
            return {loading: false, error: null, products: state.products.concat(action.payload)}
        case ProductsActionTypes.FETCH_PRODUCTS_FAIL : 
            return {loading: false, error: action.payload, products: []}    
        case ProductsActionTypes.SORT_BY_RATE : 
            return {loading: false, error: null, products: action.payload}
        case ProductsActionTypes.SORT_BY_COST : 
            return {loading: false, error: null, products: action.payload}
        case ProductsActionTypes.FILTER_PRODUCTS : 
            return {...state, products: action.payload}
        default: 
            return state
    }
}