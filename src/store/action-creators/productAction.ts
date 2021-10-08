import { Dispatch } from "redux"
import { fetchProductDetails } from "../../service/fetchProductDetails"
import { ProductAction, ProductActionTypes } from "../types/productTypes"

export const getProduct = (productId: string) => {
    return (dispatch: Dispatch<ProductAction>, getState: any) => {
        const {products} = getState().products
        let product = products.find((item: any)=>{
            return item.id === productId
        })
        dispatch({type: ProductActionTypes.FETCH_PRODUCT_SUCCESS, payload: product})
    }
}