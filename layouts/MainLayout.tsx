import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

export function MainLayout({ children, title = "Posts app" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          rel='stylesheet'
          href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'
          integrity='sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto&display=swap'
          rel='stylesheet'
        />
      </Head>

      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link href='/'>
          <a className='navbar-brand'>Home</a>
        </Link>
        <Link href='/posts'>
          <a className='navbar-brand'>Posts</a>
        </Link>
        <Link href='/posts/new'>
          <a className='navbar-brand'>Create Post</a>
        </Link>
      </nav>
      <main className='text-center'>{children}</main>
    </>
  );
}
