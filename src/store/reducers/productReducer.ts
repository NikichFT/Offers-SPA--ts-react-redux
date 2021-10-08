import {ProductState, ProductAction, ProductActionTypes} from '../types/productTypes'

const initialState = {
    product: {},
    loading: false,
    error: null
}

export const productReducer = (state: ProductState = initialState, action: ProductAction): ProductState => {
    switch (action.type) {
        case ProductActionTypes.FETCH_PRODUCT : 
            return {loading: true, error: null, product: {}}
        case ProductActionTypes.FETCH_PRODUCT_SUCCESS : 
            return {loading: false, error: null, product: action.payload}
        case ProductActionTypes.FETCH_PRODUCT_FAIL : 
            return {loading: false, error: action.payload, product: {}}    
        default: 
            return state
    }
}