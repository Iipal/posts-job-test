import { MainLayout } from "../../layouts/MainLayout";
import Alert from "../../components/Alert";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/actions";
import { PostData } from "../../interfaces/PostData";

const EMPTY_TITLE_INPUT = "Title can not be empty.";
const EMPTY_BODY_INPUT = "Your story can not be empty.";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [titleDirty, setTitleDirty] = useState(false);
  const [titleError, setTitleError] = useState(EMPTY_TITLE_INPUT);
  const [body, setBody] = useState("");
  const [bodyDirty, setBodyDirty] = useState(false);
  const [bodyError, setBodyError] = useState(EMPTY_BODY_INPUT);
  const [validForm, setValidForm] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (titleError || bodyError) {
      setValidForm(false);
    } else {
      setValidForm(true);
    }
  }, [titleError, bodyError]);

  const titleHandler = (e) => {
    setTitle(e.target.value);
    if (e.target.value) {
      setTitleError("");
    }
  };

  const bodyHandler = (e) => {
    setBody(e.target.value);
    if (e.target.value) {
      setBodyError("");
    }
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
      <form
        className='w-50'
        style={{ marginLeft: "auto", marginRight: "auto" }}
        onSubmit={handlerSubmit}>
        <h1>Create new post:</h1>
        <div className='form-group text-left'>
          <label htmlFor='post-title'>Post title:</label>
          <input
            onChange={(e) => titleHandler(e)}
            value={title}
            onBlur={(e) => setTitleDirty(true)}
            name='title'
            type='text'
            className='form-control'
            id='title'
          />
          {titleDirty && titleError && <Alert text={titleError} />}
        </div>
        <div className='form-group text-left'>
          <label htmlFor='post-body'>Post story:</label>
          <textarea
            onChange={(e) => bodyHandler(e)}
            value={body}
            onBlur={(e) => setBodyDirty(true)}
            name='body'
            className='form-control'
            id='post-body'
            rows={3}></textarea>
          {bodyDirty && bodyError && <Alert text={bodyError} />}
        </div>
        <button disabled={!validForm} type='submit' className='btn btn-primary mb-2'>
          Create
        </button>
      </form>
    </MainLayout>
  );
}
