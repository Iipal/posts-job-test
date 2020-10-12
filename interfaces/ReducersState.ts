import { PostData } from "./PostData";

export interface ReducerActionProps {
  type: string;
  payload: string | null;
}

export interface PostsReducerProps {
  posts: PostData[];
}

export interface AppReducerProps {
  loading: boolean;
  alert: string | null;
}

export interface RootReducerProps {
  posts: PostsReducerProps;
  app: AppReducerProps;
}
