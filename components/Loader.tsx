import styled, { keyframes } from "styled-components";

const Frames = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`;

const LoaderStyles = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  margin-top: 50px;

  > div {
    position: absolute;
    border: 4px solid #eee;
    opacity: 1;
    border-radius: 50%;
    animation: ${Frames} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  > div:nth-child(2) {
    animation-delay: -0.5s;
  }
`;

export default function Loader() {
  return (
    <LoaderStyles className='lds-ripple'>
      <div></div>
      <div></div>
    </LoaderStyles>
  );
}
