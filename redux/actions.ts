import { POST_CREATE, POSTS_FETCH, POST_DELETE, LOADER_SHOW, LOADER_HIDE } from "./types";
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

    const payload = await axios.get(process.env.POSTS_API).then(({ data }) => data);
    dispatch({ type: POSTS_FETCH, payload: payload.filter((p) => p.title && p.body) });

    dispatch(loaderHide());
  };
};

export const loaderShow = () => ({ type: LOADER_SHOW });
export const loaderHide = () => ({ type: LOADER_HIDE });
