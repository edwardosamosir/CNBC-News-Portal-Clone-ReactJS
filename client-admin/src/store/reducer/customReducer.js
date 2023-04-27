import { SEARCH_CATEGORY_BASED, SEARCH_QUERY } from "../action/typeKey";

const defaultState = {
    searchQuery : "",
    categoryBasedQuery : "all"
}

export default function customReducer(state = defaultState, action){
    switch (action.type) {
        case SEARCH_QUERY : 
            return {
                ...state,
                searchQuery : action.payload
            }
        case SEARCH_CATEGORY_BASED : 
            return {
                ...state,
                categoryBasedQuery : action.payload
            }
        default : 
            return state
    }
}