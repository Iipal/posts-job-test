import { MainLayout } from "../layouts/MainLayout";
import styled from "styled-components";

const HomeTitle = styled.h1`
  font-size: 5.5rem;
  margin-top: 30px;
`;

const HomeAboutP = styled.p`
  font-size: 1.3rem;
`;

const HomeLorem = styled.p`
  font-size: 0.85rem;
  width: 75vw;
  margin: 0 auto;
`;

const Home: React.FC = () => {
  return (
    <MainLayout>
      <HomeTitle>Hello, Posts World!</HomeTitle>
      <HomeAboutP>
        In this app, I've learned how to create posts, using ReduxJS with NextJS, styled
        components and much much more...
      </HomeAboutP>
      <HomeLorem>
        {/* <p className='font-weight-light w-50'> */}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem accusantium sequi
        nam consequuntur omnis debitis hic dicta minus vero deleniti. Cupiditate eligendi
        illum rerum repellendus iste incidunt quos quam ipsam? Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Rem accusantium sequi nam consequuntur omnis debitis
        hic dicta minus vero deleniti. Cupiditate eligendi illum rerum repellendus iste
        incidunt quos quam ipsam?
      </HomeLorem>
    </MainLayout>
  );
};

export default Home;
