import { POSTS_ADD_LOADING, POSTS_ADD_RESPONSE, POSTS_ERROR, POSTS_FETCH_ALL, POSTS_FETCH_ID, POSTS_FETCH_LOADING, POSTS_UPDATE } from "../action/typeKey"

const defatultState = {
    posts : [],
    postDetail : null,
    postResponse : null,
    loadingStatus : false,
    updateStatus : null,
    errorMessage : '',
    loading: true
}

function postsReducer(state = defatultState,action){
    switch (action.type){
        case POSTS_FETCH_ALL : 
            return {
                ...state,
                posts : action.payload
            }
        case POSTS_FETCH_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case POSTS_FETCH_ID :
            return {
                ...state,
                postDetail : action.payload
            }
        case POSTS_ADD_RESPONSE :
            return {
                ...state,
                postResponse : action.payload
            }
        case POSTS_ADD_LOADING : 
            return {
                ...state,
                loadingStatus : action.payload
            }
        case POSTS_ERROR : 
            return {
                ...state,
                errorMessage : action.payload
            }
        case POSTS_UPDATE :
            return {
                ...state,
                updateStatus : action.payload
            }
        default :
            return state
    }
}

export default postsReducer