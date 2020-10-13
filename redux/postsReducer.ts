import { PostData } from "../interfaces/PostData";
import { POST_CREATE, POSTS_FETCH, POST_DELETE } from "./types";

const initState = {
  posts: [],
  postByID: {},
};

export const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case POST_DELETE:
      return {
        ...state,
        posts: state.posts.filter((item: PostData) => item.id !== action.payload),
      };
    case POST_CREATE:
      return { ...state, posts: [...state.posts, action.payload] };
    case POSTS_FETCH:
      return { ...state, posts: [...state.posts, ...action.payload] };
    default:
      return state;
  }
};
