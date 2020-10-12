import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { MainLayout } from "../layouts/MainLayout";
import Loader from "../components/Loader";
import Post from "../components/Post";
import { fetchPosts } from "../redux/actions";
import { RootReducerProps } from "../interfaces/ReducersState";

const Posts = ({ syncPosts }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootReducerProps) => state.posts.posts);
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
        <h3>No posts fetched or created</h3>
        <button
          className='btn btn-primary'
          onClick={() => {
            dispatch(fetchPosts());
          }}>
          Download
        </button>
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
