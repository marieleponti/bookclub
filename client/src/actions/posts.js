// import everything as actions from api
import * as api from '../api';

// Action Creators - functions taht return actions
export const getPosts = () => async (dispatch) => {
    try{
        // get response from api
        const{ data } = await api.fetchPosts();
        dispatch ({ type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        console.log("createPost before api request in action folder");
        // get data make api request to backend server
        const { data } = await api.createPost(post);

        dispatch({type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error);
    }
}