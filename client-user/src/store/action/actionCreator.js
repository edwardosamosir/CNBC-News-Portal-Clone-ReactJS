//Action Creator atau kumpulan function yang mengembalikan object action

import { baseUrl } from "../../config/api"
import { NEWS_DETAILS_FETCH_LOADING, NEWS_DETAILS_FETCH_SUCCESS, NEWS_FETCH_LOADING, NEWS_FETCH_SUCCESS } from "./actionType"

export const fetchAllNews = (payload) => {
    return {
        type: NEWS_FETCH_SUCCESS,
        payload
    }
}

export const fetchNewsLoading = () => {
    return {
        type: NEWS_FETCH_LOADING,
        payload: false
    }
}

export const fetchDetailNewsbyId = (payload) => {
    return {
        type: NEWS_DETAILS_FETCH_SUCCESS,
        payload
    }
}

export const fetchNewsDetailLoading = () => {
    return {
        type: NEWS_DETAILS_FETCH_LOADING,
        payload: false
    }
}


export const fetchPosts = () => {
    return (dispatch) =>{

        fetch(baseUrl + "posts")
            .then((res) => res.json())
            .then((data) => {
    
                const action = fetchAllNews(data)
                dispatch(action)
            })
            .catch((err) => console.log(err))
            .finally(() => {
    
                const action = fetchNewsLoading()
                dispatch(action)
            });
    } 
    
}

export const fetchDetailPost = (postId) => {

    return (dispatch) =>{
    fetch(baseUrl + `posts/${postId}`)
        .then((res) => res.json())
        .then((data) => {

            const action = fetchDetailNewsbyId(data)
            dispatch(action)
        })
        .catch((err) => console.log(err))
        .finally(() => {

            const action = fetchNewsDetailLoading()
            dispatch(action)
        });
    }
}