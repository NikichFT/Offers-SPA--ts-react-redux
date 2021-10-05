export interface ProductState {
    products: any[];
    loading: boolean;
    error: null | string;
}

export enum ProductActionTypes {
    FETCH_PRODUCTS = 'FETCH_PRODUCTS',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_FAIL = 'FETCH_PRODUCTS_FAIL',
}

interface FetchProductsAction {
    type: ProductActionTypes.FETCH_PRODUCTS;
}
interface FetchProductsSuccessAction {
    type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS;
    payload: any[]
}
interface FetchProductsFailAction {
    type: ProductActionTypes.FETCH_PRODUCTS_FAIL;
    payload: string 
}
export type ProductAction = FetchProductsAction | FetchProductsSuccessAction | FetchProductsFailAction