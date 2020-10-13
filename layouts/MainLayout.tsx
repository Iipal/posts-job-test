import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  height: 40px;
  left: 0;
  top: 0;
  right: 0;
  background: #222;
  display: flex;
  justify-content: space-around;
  padding: 0 25% 0 25%;
  align-items: center;

  > a {
    font-size: 1.1rem;
    color: #eee;
  }
`;

const Main = styled.main`
  margin-top: 60px;
  padding: 1rem;
  text-align: center;
`;

export function MainLayout({ children, title = "Posts app" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto&display=swap'
          rel='stylesheet'
        />
      </Head>

      <Nav>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/posts'>
          <a>Posts</a>
        </Link>
        <Link href='/posts/new'>
          <a>Create Post</a>
        </Link>
      </Nav>
      <Main>{children}</Main>
    </>
  );
}
