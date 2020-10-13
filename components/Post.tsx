import { useDispatch } from "react-redux";
import { PostData } from "../interfaces/PostData";
import { deletePost } from "../redux/actions";
import styled from "styled-components";

const PostsListGroup = styled.span`
  display: flex;
  flex-direction: column;
  width: 70vw;
  margin: 10px auto;
  margin-bottom: 25px;
  padding: 25px;
  border: 1px solid #666;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 2px #222;
`;

const PostsListItemControlsContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  margin-top: 10px;
  padding: 15px 20px 15px 20px;
  border-top: 1px solid #666;
  border-radius: 2px;
`;

const PostsListItemInfoContainer = styled.div`
  width: 80%;
  padding: 15px 20px 15px 20px;
  margin: 0 auto;
  margin-bottom: 15px;
  border: 1px solid #191919;
  border-radius: 10px;
  background-color: #191919;
  box-shadow: 0px 0px 5px 1px #161616;
`;

const PostsListItemID = styled.span`
  padding: 5px;
  padding-top: 7px;
  border: 1px solid #eee;
  border-radius: 4px;
`;

const PostsListItemTitle = styled.h5`
  text-align: center;
  font-size: 2.2rem;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const PostsListItemDescription = styled.p`
  margin: 10px auto;
  margin-top: 6px;
  width: 90%;
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
      <PostsListItemInfoContainer>
        <PostsListItemTitle>{post.title}</PostsListItemTitle>
        <PostsListItemDescription>{post.body}</PostsListItemDescription>
      </PostsListItemInfoContainer>

      <PostsListItemControlsContainer>
        <PostsListItemID>{post.id}</PostsListItemID>
        <PostDeleteButton onClick={clickHandler}>Delete</PostDeleteButton>
      </PostsListItemControlsContainer>
    </PostsListGroup>
  );
}
