import { CATEGORIES_CREATE, CATEGORIES_CREATE_ERROR, CATEGORIES_CREATE_LOAD_STATUS, CATEGORIES_FETCH_ALL, CATEGORIES_FETCH_LOADING, CATEGORIES_SET_TO_DEFAULT, CATEGORIES_UPDATE } from "../action/typeKey"

const defatultState = {
    categories : [],
    categoryDetail : null,
    loadingStatus : false,
    updateStatus : null,
    errorMessage : '',
    loading: true
}

function categoriesReducer(state = defatultState,action){
    switch (action.type){
        case CATEGORIES_FETCH_ALL :
            return {
                ...state,
                categories : action.payload
            }
        case CATEGORIES_FETCH_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case CATEGORIES_CREATE :
            return {
                ...state,
                categoryDetail : action.payload
            }
        case CATEGORIES_CREATE_LOAD_STATUS :
            return {
                ...state,
                loadingStatus : action.payload
            }
        case CATEGORIES_CREATE_ERROR : 
            return {
                ...state,
                errorMessage : action.payload
            }
        case CATEGORIES_UPDATE : 
            return {
                ...state,
                updateStatus : action.payload
            }
        case CATEGORIES_SET_TO_DEFAULT : 
            return {
                ...state,
                categoryDetail : null,
                updateStatus : null,
            }
        default : 
            return state
    }
}

export default categoriesReducer