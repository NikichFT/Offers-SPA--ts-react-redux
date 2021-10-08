import { Dispatch } from "redux"
import { ProductsActionTypes, ProductsAction } from "../types/productTypes"

export const sortRateAction = () => {
    return (dispatch: Dispatch<ProductsAction>, getState: any) => {
        const {products} = getState().products
        let sortedRateProducts: any[] = products.sort((a: any,b: any) => a.rate.periods[0].rate.from - b.rate.periods[0].rate.from)
        dispatch({type: ProductsActionTypes.SORT_BY_RATE, payload: sortedRateProducts})
    }
}

export const sortCostAction = () => {
    return (dispatch: Dispatch<ProductsAction>, getState: any) => {
        const {products} = getState().products
        let sortedRateProducts: any[] = products.sort((a: any,b: any) => a.rate.creditAmount.from - b.rate.creditAmount.from)
        dispatch({type: ProductsActionTypes.SORT_BY_COST, payload: sortedRateProducts})
    }
}