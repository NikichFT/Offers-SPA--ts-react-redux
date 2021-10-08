export interface SearchValueState {
    searchValue: string | number
}

export enum SearchActionTypes {
    SET_SEARCH = 'SET_SEARCH'
}

interface SearchActionSet {
    type: SearchActionTypes.SET_SEARCH;
    payload: number | string
}
export type SearchAction = SearchActionSet