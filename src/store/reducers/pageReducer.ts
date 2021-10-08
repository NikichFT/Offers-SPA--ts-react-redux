import {PageState, PageAction, PageActionTypes} from '../types/pageTypes'

const initialState = {
    pageNum: 1,
    fetching: true
}

export const pageReducer = (state: PageState = initialState, action: PageAction): PageState => {
    switch (action.type) {
        case PageActionTypes.INCREMENT_PAGE : 
            return {fetching: false, pageNum: action.payload}
        case PageActionTypes.UPDATE_PAGE : 
            return {...state, pageNum: action.payload}    
        case PageActionTypes.FETCHING :
            return {...state, fetching: action.payload}
        default: 
            return state
    }
}