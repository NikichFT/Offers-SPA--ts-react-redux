import { Dispatch } from "redux"
import { FliteredProductsActionTypes } from "../types/filteredProductsTypes"
import { ProductsActionTypes, ProductsAction } from "../types/productTypes"
import { pageAction } from "./pageAction"
import { getProducts } from "./products"

export const filterAction = () => {
    return (dispatch: any, getState: any) => {
        if ( getState().search.searchValue.length > 0 )  {
            if (typeof getState().search.searchValue === 'string') {
                const filterProducts = getState().products.products.filter((obj: any) => obj.name.toLowerCase().match(getState().search.searchValue.toLowerCase()) || obj.organization.name.toLowerCase().match(getState().search.searchValue.toLowerCase()))
                
                dispatch({type: FliteredProductsActionTypes.SET_FILTER_PRODUCTS, payload: filterProducts})
                // dispatch({type: ProductsActionTypes.FILTER_PRODUCTS, payload: filterProducts})
            }
            if (!isNaN(getState().search.searchValue)) {
                const filterProducts = getState().products.products.filter((obj: any) => obj.rate.periods[0].rate.from == getState().search.searchValue || obj.rate.creditAmount.from == getState().search.searchValue || obj.organization.license == getState().search.searchValue || obj.customerRequirements.age  == getState().search.searchValue)
                
                dispatch({type: FliteredProductsActionTypes.SET_FILTER_PRODUCTS, payload: filterProducts})
                // dispatch({type: ProductsActionTypes.FILTER_PRODUCTS, payload: filterProducts})
            }
        }
    }
}