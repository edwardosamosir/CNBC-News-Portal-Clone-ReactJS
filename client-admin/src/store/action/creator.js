import { baseUrl } from "../../config/api";
import {
  CATEGORIES_CREATE,
  CATEGORIES_CREATE_ERROR,
  CATEGORIES_CREATE_LOAD_STATUS,
  CATEGORIES_FETCH_ALL,
  CATEGORIES_FETCH_LOADING,
  CATEGORIES_UPDATE,
  POSTS_ADD_LOADING,
  POSTS_ADD_RESPONSE,
  POSTS_ERROR,
  POSTS_FETCH_ALL,
  POSTS_FETCH_ID,
  POSTS_FETCH_LOADING,
  POSTS_UPDATE,
  SEARCH_CATEGORY_BASED,
  SEARCH_QUERY,
  TAGS_FETCH_ALL,
  TAGS_FETCH_LOADING
} from "./typeKey";


export const searchQuery= (payload) => {
  return {
    type : SEARCH_QUERY,
    payload
  }
}

export const searchBasedCategory = (payload) => {
  return {
    type : SEARCH_CATEGORY_BASED,
    payload
  }
}

export const fetchPostsLoading = () => {
  return {
      type: POSTS_FETCH_LOADING,
      payload: false
  }
}

export const fetchCategoriesLoading = () => {
  return {
      type: CATEGORIES_FETCH_LOADING,
      payload: false
  }
}

export const fetchTagsLoading = () => {
  return {
      type: TAGS_FETCH_LOADING,
      payload: false
  }
}


export const fetchPost = () => {
  return (dispatch) => {
    dispatch({type : POSTS_ADD_LOADING, payload : true})
    fetch( baseUrl + "posts", {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("something wrong");
        }
      })
      .then((data) => {
        dispatch({ type: POSTS_FETCH_ALL, payload: data });
      })
      .catch((error) => {
        dispatch({ type: POSTS_ERROR, payload: error?.message });
      })
      .finally(() => {
        const action = fetchPostsLoading()
        dispatch(action)
    });
  };
};

export const fetchDetailPost = (postId) => {
  return (dispatch) => {
    fetch(`${baseUrl}posts/${postId}`, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("something wrong");
        }
      })
      .then((data) => {
        dispatch({ type: POSTS_FETCH_ID, payload: data });
      })
      .catch((error) => {
        dispatch({ type: "error" });
      });
  };
};

export const fetchCategories = () => {
  return (dispatch) => {
    fetch( baseUrl + "categories", {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("something wrong");
        }
      })
      .then((data) => {
        dispatch({ type: CATEGORIES_FETCH_ALL, payload: data });
      })
      .catch((error) => {
        dispatch({ type: "error" });
      })
      .finally(() => {
        const action = fetchCategoriesLoading()
        dispatch(action)
    });
  };
};

export const fetchCategory = (payload) => {
  return (dispatch) => {
    dispatch({ type: CATEGORIES_CREATE_LOAD_STATUS, payload: true });
    fetch(`${baseUrl}categories/${payload}`,{
            headers : {
                access_token : localStorage.getItem('access_token')
            }
        })
        .then(response => {
            // console.log(response)
            if(response.ok){
                return response.json()
            } else {
                throw new Error('something is wrong')
            }
        })
        .then(data => {
            // console.log(data)
            // setName(data.name)
            dispatch({type : CATEGORIES_CREATE, payload : data})
        })
        .catch(error => {
            // console.log(error)
            dispatch({type : CATEGORIES_CREATE_ERROR, payload : error?.message })
        })
        .finally(_=>{
          dispatch({ type: CATEGORIES_CREATE_LOAD_STATUS, payload: false });
        })
  }
}

export const updateCategory = (payload,id) => {
  return (dispatch,getState) => {
    dispatch({ type: CATEGORIES_CREATE_LOAD_STATUS, payload: true });
    // console.log(getState())
    fetch(`${baseUrl}categories/${id}`,{
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json',
                access_token : localStorage.getItem('access_token')
            },
            body : JSON.stringify(payload)
        })
        .then(response => {
            if(response.ok){
                return response.json()
            } else {
              throw new Error('something goes wrong')
            }
        })
        .then(data => {
            // console.log(data)
            // navigate('/categories')
            dispatch({type : CATEGORIES_UPDATE, payload : data})
        })
        .catch(error => {
            // console.log(error)
            dispatch({type : CATEGORIES_CREATE_ERROR, payload : error?.message })
        })
        .finally(_=> {
          dispatch({ type: CATEGORIES_CREATE_LOAD_STATUS, payload: false });
          // console.log(getState())
        })
  }
}


export const fetchTags = () => {
  return (dispatch) => {
    fetch( baseUrl + "tags", {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("something is wrong");
        }
      })
      .then((data) => {
        dispatch({ type: TAGS_FETCH_ALL, payload: data });
      })
      .catch((error) => {
        dispatch({ type: "error" });
      })
      .finally(() => {
    
        const action = fetchTagsLoading()
        dispatch(action)
    });
  };
};

export const addCategory = (payload) => {
  return (dispatch, getState) => {
    dispatch({ type: CATEGORIES_CREATE_LOAD_STATUS, payload: true });
    // console.log(getState())
    fetch( baseUrl + "categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(payload),
    })
    .then(response => {
      if(response.ok){
        return response.json()
      } else {
        throw new Error('something is wrong')
      }
    })
    .then(data => {
      dispatch({type : CATEGORIES_CREATE, payload : data})
    })
    .catch(error => {
      dispatch({type : CATEGORIES_CREATE_ERROR, payload : error?.message })
    })
    .finally( _ => {
      dispatch({type : CATEGORIES_CREATE_LOAD_STATUS, payload : false})
      // console.log(getState())
    })
  };
};

export const addPost = (payload) => {
  return (dispatch, getState) => {
    dispatch({type : POSTS_ADD_LOADING, payload : true})
    fetch( baseUrl + "posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("something wrong");
        }
      })
      .then((data) => {
        dispatch({type : POSTS_ADD_RESPONSE, payload : data})
      })
      .catch((error) => {
        dispatch({type : POSTS_ERROR, payload : error?.message })
      })
      .finally( _ => {
        dispatch({type : POSTS_ADD_LOADING, payload : false})
      })
  }
}

export const updatePost = (payload, id) => {
  return (dispatch) => {
    dispatch({type : POSTS_ADD_LOADING, payload : true})
    fetch(`${baseUrl}posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        access_token : localStorage.getItem('access_token')
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("something wrong");
        }
      })
      .then((data) => {
        dispatch({type : POSTS_UPDATE, payload : data})
      })
      .catch((error) => {
        dispatch({type : POSTS_ERROR, payload : error?.message })
      })
      .finally(_=>{
        dispatch({type : POSTS_ADD_LOADING, payload : false})
      })
  }
}