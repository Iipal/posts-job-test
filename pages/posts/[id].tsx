import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { PostData } from "../../interfaces/PostData";
import axios from "axios";
import { MainLayout } from "../../layouts/MainLayout";
import Loader from "../../components/Loader";
import { RootReducerProps } from "../../interfaces/ReducersState";
import { NextPageContext } from "next";

interface PostPageProps {
  post: PostData;
}

async function APIRequest(postID, setterCallback: null | Function = null) {
  let data = null;

  try {
    data = await axios.get(`${process.env.POSTS_API}/${postID}`).then(({ data }) => data);

    if (setterCallback) {
      setterCallback(data);
    }
  } catch (e) {}
  return data;
}

function Post({ post: serverPost }: PostPageProps) {
  const [post, setPost] = useState(serverPost);
  const router = useRouter();
  const alert = useSelector((state: RootReducerProps) => state.app.alert);
  const loading = useSelector((state: RootReducerProps) => state.app.loading);

  useEffect(() => {
    if (Object.keys(serverPost).length === 0) {
      APIRequest(router.query.id, setPost);
    }
  }, []);

  if (Object.keys(post).length === 0) {
    return (
      <MainLayout title='Loading post ...'>
        <Loader />
      </MainLayout>
    );
  }

  let postCtx = (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );

  if (!post.title && !post.body) {
    postCtx = <p>Recieved empty Post.</p>;
  }

  return <MainLayout title={`Post: ${post.title}`}>{postCtx}</MainLayout>;
}

interface PostNextPageContext extends NextPageContext {
  query: {
    id: string;
  };
}

Post.getInitialProps = async ({ query, req }: PostNextPageContext) => {
  if (!req) {
    return { post: null };
  }
  return { post: APIRequest(query.id) };
};

export default Post;
