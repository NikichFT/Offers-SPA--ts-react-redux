//PRODUCTS
export interface ProductsState {
    products: any[];
    loading: boolean;
    error: null | string;
}

export enum ProductsActionTypes {
    FETCH_PRODUCTS = 'FETCH_PRODUCTS',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_FAIL = 'FETCH_PRODUCTS_FAIL',
    SORT_BY_RATE = 'SORT_BY_RATE',
    SORT_BY_COST = 'SORT_BY_COST',
    FILTER_PRODUCTS = 'FILTER_PRODUCTS'
}

interface FetchProductsAction {
    type: ProductsActionTypes.FETCH_PRODUCTS;
}
interface FetchProductsSuccessAction {
    type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS;
    payload: any[]
}
interface FetchProductsFailAction {
    type: ProductsActionTypes.FETCH_PRODUCTS_FAIL;
    payload: string 
}
interface SortProductsRateAction {
    type: ProductsActionTypes.SORT_BY_RATE;
    payload: any[] 
}
interface SortProductsCostAction {
    type: ProductsActionTypes.SORT_BY_COST;
    payload: any[] 
}
interface FilterProducts {
    type: ProductsActionTypes.FILTER_PRODUCTS,
    payload: any[]
}
export type ProductsAction = FetchProductsAction | FetchProductsSuccessAction | FetchProductsFailAction | SortProductsRateAction | SortProductsCostAction | FilterProducts

//PRODUCT
export interface ProductState{
    product: any;
    loading: boolean;
    error: null | string;
}

export enum ProductActionTypes {
    FETCH_PRODUCT = 'FETCH_PRODUCT',
    FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS',
    FETCH_PRODUCT_FAIL = 'FETCH_PRODUCT_FAIL',
}

interface FetchProductAction {
    type: ProductActionTypes.FETCH_PRODUCT;
}
interface FetchProductSuccessAction {
    type: ProductActionTypes.FETCH_PRODUCT_SUCCESS;
    payload: any
}
interface FetchProductFailAction {
    type: ProductActionTypes.FETCH_PRODUCT_FAIL;
    payload: string 
}

export type ProductAction = FetchProductAction | FetchProductSuccessAction | FetchProductFailAction