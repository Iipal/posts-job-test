import { MainLayout } from "../../layouts/MainLayout";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/actions";
import { PostData } from "../../interfaces/PostData";
import styled from "styled-components";

const Form = styled.form`
  width: 50%;
  margin: 10px auto;
  padding: 25px;
  border: 1px solid #666;
  border-radius: 5px;
  background: #181818;
`;

const FormGroup = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin: 15px auto;
  width: 80%;

  > label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: #666;
  }

  > input {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid #666;
    outline: 0;
    font-size: 1.3rem;
    color: #fff;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown ~ .form__label {
      font-size: 1.3rem;
      cursor: text;
      top: 20px;
    }
  }
  > input:focus {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: #ddd;
      font-weight: 700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #eee, #666);
    border-image-slice: 1;
  }
  > input:required {
    box-shadow: none;
  }

  > textarea {
    color: #eee;
    background: #333;
    width: 100%;
    border: 0;
    border: 2px solid #666;
    outline: 0;
    overflow: auto;
    resize: vertical;
    max-height: 256px;
  }
  > textarea:required {
    box-shadow: none;
  }
`;

const FormSubmitButton = styled.button`
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 80%;
  background: #131313;
  color: #d4d4d4;
  border: 2px solid gray;
  transition: 0.3s;

  &:hover {
    background: #222;
  }

  &:disabled,
  &[disabled] {
    color: #aaa;
    background: black;
  }
`;

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const bodyHandler = (e) => {
    setBody(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    const newPost: PostData = {
      id: Date.now(),
      title: title,
      body: body,
    };
    dispatch(createPost(newPost));
    setTitle("");
    setBody("");
  };

  return (
    <MainLayout>
      <Form onSubmit={handlerSubmit}>
        <FormGroup>
          <input
            onChange={(e) => titleHandler(e)}
            value={title}
            name='title'
            type='input'
            placeholder='Title'
            id='post-title'
            required
          />
          <label htmlFor='post-title' className='form__label'>
            Title
          </label>
        </FormGroup>

        <FormGroup>
          <textarea
            onChange={(e) => bodyHandler(e)}
            value={body}
            name='body'
            id='post-body'
            rows={3}
            required></textarea>
        </FormGroup>

        <FormSubmitButton type='submit'>Create post</FormSubmitButton>
      </Form>
    </MainLayout>
  );
}
