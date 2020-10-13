import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import { useStore } from "../redux/store";
import { AppProps } from "next/dist/next-server/lib/router/router";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    background: #141414;
    color: #eee;
  }

  html { /* Hide scroll bar in IE and Firefox */
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  ::-webkit-scrollbar { /* Hide scroll bar in Chrome */
    width: 0px;
  }
`;

export default function PostsApp({ Component, pageProps }: AppProps) {
  const store = useStore({});

  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
