import { useDispatch } from "react-redux";
import { PostData } from "../interfaces/PostData";
import { deletePost } from "../redux/actions";
import styled from "styled-components";

const PostsListGroup = styled.span`
  display: flex;
  flex-direction: column;
  width: 70vw;
  margin: 10px auto;
  padding: 25px;
  border: 1px solid #666;
  border-radius: 5px;
`;

const PostsListItemTitle = styled.h5`
  display: inline-block;
  text-align: center;
  font-size: 2.2rem;
  width: 80%;
  margin: 0 auto;
`;

const PostsListItemDescription = styled.p`
  margin: 10px auto;
  width: 75%;
  margin-top: 6px;
  text-align: left;
`;

const PostDeleteButton = styled.button`
  display: inline-block;
  margin-left: auto;
  border: 2px solid #222;
  border-radius: 5px;
  width: 5rem;
  padding: 0.5rem 0;
  background: #131313;
  color: #d4d4d4;
  transition: 0.2s;

  &:hover {
    color: #f01f1fdd;
    border: 2px solid #f01f1fdd;
  }
`;

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
    <PostsListGroup>
      <PostsListItemTitle>{post.title}</PostsListItemTitle>
      <PostsListItemDescription>{post.body}</PostsListItemDescription>
      <PostDeleteButton onClick={clickHandler}>Delete</PostDeleteButton>
    </PostsListGroup>
  );
}
