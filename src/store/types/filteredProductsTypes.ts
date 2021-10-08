export interface FliteredProductsState {
    filteredProducts: any[]
}

export enum FliteredProductsActionTypes {
    SET_FILTER_PRODUCTS = 'SET_FILTER_PRODUCTS'
}

interface SetFilterProducts {
    type: FliteredProductsActionTypes.SET_FILTER_PRODUCTS;
    payload: any[]
}
export type FilteredActions = SetFilterProducts 