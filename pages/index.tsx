import Head from "next/head";
import { MainLayout } from "../layouts/MainLayout";
import styled from "styled-components";

export default function Home() {
  return (
    <MainLayout>
      <h1 className='display-4'>Hello, Posts World!</h1>
      <p className='lead'>
        In this app, I've learned how to create posts, comments on it, using ReduxJS with
        NextJS and much much more...
      </p>
      <p className='font-weight-light'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem accusantium sequi
        nam consequuntur omnis debitis hic dicta minus vero deleniti. Cupiditate eligendi
        illum rerum repellendus iste incidunt quos quam ipsam? Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Rem accusantium sequi nam consequuntur omnis debitis
        hic dicta minus vero deleniti. Cupiditate eligendi illum rerum repellendus iste
        incidunt quos quam ipsam?
      </p>
    </MainLayout>
  );
}
