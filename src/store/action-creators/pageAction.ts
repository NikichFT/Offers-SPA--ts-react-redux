import { Dispatch } from "redux"
import { PageAction, PageActionTypes } from "../types/pageTypes"

export const pageAction = () => {
    return (dispatch: Dispatch<PageAction>, getState: any) => {
        let { pageNum } = getState().pageOperations
        let newPageNum: number = pageNum + 1
        if (pageNum < 6) dispatch({type: PageActionTypes.INCREMENT_PAGE, payload: newPageNum})
    }
}

export const pageFetching = (isFetching: boolean) => {
    return (dispatch: Dispatch<PageAction>) => {
        dispatch({type: PageActionTypes.FETCHING, payload: isFetching})
    }
}

export const pageUpdate = (newValue: number) => {
    return (dispatch: Dispatch<PageAction>) => {
        dispatch({type: PageActionTypes.UPDATE_PAGE, payload: newValue})
    }
}