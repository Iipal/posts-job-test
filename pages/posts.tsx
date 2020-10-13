import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { MainLayout } from "../layouts/MainLayout";
import Loader from "../components/Loader";
import Post from "../components/Post";
import { fetchPosts } from "../redux/actions";
import { RootReducerProps } from "../interfaces/ReducersState";
import styled from "styled-components";

const PostsInfo = styled.h3`
  font-size: 2rem;
  margin: 30px auto;
`;

const PostsFetchButton = styled.button`
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 10rem;
  background: #131313;
  color: #d4d4d4;
  border: 2px solid gray;
  transition: 0.3s;

  &:hover {
    background: #222;
  }
`;

const Posts = ({ syncPosts }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootReducerProps) => state.app.loading);

  if (loading) {
    return (
      <MainLayout>
        <Loader />
      </MainLayout>
    );
  }

  if (!syncPosts || !syncPosts.length) {
    return (
      <MainLayout>
        <PostsInfo>No posts fetched or created</PostsInfo>
        <PostsFetchButton
          onClick={() => {
            dispatch(fetchPosts());
          }}>
          Download
        </PostsFetchButton>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className='list-group text-left'>
        {syncPosts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </MainLayout>
  );
};

const mapStateToProps = (state) => ({ syncPosts: state.posts.posts });

export default connect(mapStateToProps, null)(Posts);
