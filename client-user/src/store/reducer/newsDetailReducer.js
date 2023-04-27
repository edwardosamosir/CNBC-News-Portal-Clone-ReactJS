import { NEWS_DETAILS_FETCH_LOADING, NEWS_DETAILS_FETCH_SUCCESS } from "../action/actionType"

const initialState = {
    posts: [],
    post: [],
    loading: true
}

export default function newsDetailReducer(state = initialState, action) {
    switch (action.type) {
        case NEWS_DETAILS_FETCH_SUCCESS:
            return {
                ...state,
                post: action.payload
            }
        case NEWS_DETAILS_FETCH_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}