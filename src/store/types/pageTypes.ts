export interface PageState {
    pageNum: number;
    fetching: boolean;
}

export enum PageActionTypes {
    FETCHING = 'FETCHING',
    INCREMENT_PAGE = 'INCREMENT_PAGE',
    UPDATE_PAGE = 'UPDATE_PAGE'
}

interface PageActionIncrement {
    type: PageActionTypes.INCREMENT_PAGE;
    payload: number
}
interface PageActionFetching {
    type: PageActionTypes.FETCHING;
    payload: boolean
}
interface PageActionUpdate {
    type: PageActionTypes.UPDATE_PAGE;
    payload: number
}
export type PageAction = PageActionIncrement | PageActionFetching | PageActionUpdate