import { useDispatch } from "react-redux";
import { PostData } from "../interfaces/PostData";
import { deletePost } from "../redux/actions";

interface PayloadPost {
  post: PostData;
}

export default function Post({ post }: PayloadPost) {
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(deletePost(post.id));
  };

  return (
    <span className='list-group-item '>
      <div className='d-flex w-100 justify-content-between'>
        <h5>{post.title}</h5>
        <button className='btn btn-danger' onClick={clickHandler}>
          Delete
        </button>
      </div>
      <p className='mb-1'>{post.body}</p>
    </span>
  );
}
