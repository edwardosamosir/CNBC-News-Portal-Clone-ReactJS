import {  NEWS_FETCH_LOADING, NEWS_FETCH_SUCCESS,  } from "../action/actionType"

const initialState = {
    posts: [],
    loading: true
}

export default function newsReducer(state = initialState, action) {
    switch (action.type) {
        case NEWS_FETCH_SUCCESS:
            return {
                ...state,
                posts: action.payload
            }
        case NEWS_FETCH_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}