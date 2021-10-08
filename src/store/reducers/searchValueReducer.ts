import { SearchAction, SearchActionTypes, SearchValueState } from '../types/searchValueTypes'

const initialState = {
    searchValue: ''
}

export const searchValueReducer = (state: SearchValueState = initialState, action: SearchAction): SearchValueState => {
    switch (action.type) {
        case SearchActionTypes.SET_SEARCH : 
            return {searchValue: action.payload}
        default: 
            return state
    }
}