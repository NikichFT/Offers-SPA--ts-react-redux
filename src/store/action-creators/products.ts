import { Dispatch } from "redux"
import { fetchProducts } from "../../service/fetchProducts"
import { PageAction, PageActionTypes } from "../types/pageTypes"
import { ProductsAction, ProductsActionTypes } from "../types/productTypes"
import { pageAction } from "./pageAction"

export const getProducts = (page: number) => {
    return async (dispatch: Dispatch<any>) => {
        try{
            dispatch({type: ProductsActionTypes.FETCH_PRODUCTS})
            fetchProducts(page)
            .then(products => {
                dispatch({type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS, payload: products})
                dispatch(pageAction())
            }
            )
            .finally(()=> dispatch({type: PageActionTypes.FETCHING, payload: false}))
        } catch (er) {
            dispatch({type: ProductsActionTypes.FETCH_PRODUCTS_FAIL, payload: 'An error occurred while receiving data'})
        }
    }
}