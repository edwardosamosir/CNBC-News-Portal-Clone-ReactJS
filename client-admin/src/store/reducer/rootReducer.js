import { combineReducers } from "redux"
import categoriesReducer from "./categoriesReducer"
import customReducer from "./customReducer"
import postsReducer from "./postsReducer"
import tagsReducer from "./tagsReducer"

const rootReducer = combineReducers({
    post : postsReducer,
    category : categoriesReducer,
    tag : tagsReducer,
    custom : customReducer
})

export default rootReducer