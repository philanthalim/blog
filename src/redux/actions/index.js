//import Axios from "axios";
export const addPost = (post) => {
  return {
    type: "ADD_POST",
    payload: post,
  };
};

export const getPosts = (data) => {
  return {
    type: "GET_POSTS",
    payload: data,
  };
};

//action creator
/*
export const fetchPosts = () => {
  return function (dispatch) {
    Axios.get("https://blogzspot.herokuapp.com/api/blogs")
      .then((resp) => {
        const posts = resp.data;
        dispatch(getPosts(posts));
      })
      .catch((err) => alert(err));
  };
};*/
