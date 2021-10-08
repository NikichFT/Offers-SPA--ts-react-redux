import { Dispatch } from "redux"
import { FliteredProductsActionTypes } from "../types/filteredProductsTypes"
import { SearchAction, SearchActionTypes } from "../types/searchValueTypes"
import { pageUpdate } from "./pageAction"
import { getProducts } from "./products"

export const setSearch = (searchValue: number | string) => {
    return (dispatch: any) => {
        if (searchValue.toString().length === 0) {
            dispatch({type: FliteredProductsActionTypes.SET_FILTER_PRODUCTS, payload: []})
            dispatch(pageUpdate(2))
        }
        dispatch({type: SearchActionTypes.SET_SEARCH, payload: searchValue})
    }
}