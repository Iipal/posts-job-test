import {
  POST_CREATE,
  POSTS_FETCH,
  LOADER_SHOW,
  LOADER_HIDE,
  ALERT_SHOW,
  ALERT_HIDE,
  POST_DELETE,
} from "./types";
import { PostData } from "../interfaces/PostData";
import axios from "axios";

export const createPost = (post: PostData) => ({ type: POST_CREATE, payload: post });
export const deletePost = (postID: number | string) => ({
  type: POST_DELETE,
  payload: postID,
});

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(loaderShow());

    const payload = await axios
      .get("https://simple-blog-api.crew.red/posts")
      .then(({ data }) => data);
    dispatch({ type: POSTS_FETCH, payload: payload.filter((p) => p.title && p.body) });

    dispatch(loaderHide());
  };
};

export const loaderShow = () => ({ type: LOADER_SHOW });
export const loaderHide = () => ({ type: LOADER_HIDE });

export const alertShow = (text) => {
  return (dispatch) => {
    dispatch({ type: ALERT_SHOW, paylod: text });
    setTimeout(() => {
      dispatch(alertHide());
    }, 2500);
  };
};
export const alertHide = () => ({ type: ALERT_HIDE });
