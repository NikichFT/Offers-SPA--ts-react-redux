import { Dispatch } from "redux"
import { fetchProductDetails } from "../../service/fetchProductDetails"
import { ProductActionTypes } from "../types/productTypes"

export const getProduct = (productId: string) => {
    return async (dispatch: Dispatch<any>) => {
        try{
            dispatch({type: ProductActionTypes.FETCH_PRODUCT})
            fetchProductDetails(productId)
            .then(product => {
                dispatch({type: ProductActionTypes.FETCH_PRODUCT_SUCCESS, payload: product})
            })
        } catch (er) {
            dispatch({type: ProductActionTypes.FETCH_PRODUCT_FAIL, payload: 'An error occurred while receiving data'})
        }
    }
    // return (dispatch: Dispatch<ProductAction>, getState: any) => {
    //     const {products} = getState().products
    //     let product = products.find((item: any)=>{
    //         return item.id === productId
    //     })
    //     dispatch({type: ProductActionTypes.FETCH_PRODUCT_SUCCESS, payload: product})
    // }
}