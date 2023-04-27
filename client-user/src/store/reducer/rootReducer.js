import { combineReducers } from "redux"
import newsReducer from "./newsReducer"
import newsDetailReducer from "./newsDetailReducer"

const rootReducer = combineReducers({
    news: newsReducer,
    newsDetail: newsDetailReducer
})

export default rootReducer;