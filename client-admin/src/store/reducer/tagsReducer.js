import { TAGS_FETCH_ALL, TAGS_FETCH_LOADING } from "../action/typeKey"


const defatultState = {
    tags : [],
    loading: true
}

function tagsReducer(state = defatultState,action){
    switch (action.type){
        case TAGS_FETCH_ALL : 
            return {
                ...state,
                tags : action.payload
            }
        case TAGS_FETCH_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default : 
            return state
    }
}

export default tagsReducer