import "../styles/globals.css";
import { useStore } from "../redux/store";
import { Provider } from "react-redux";

export default function PostsApp({ Component, pageProps }) {
  const store = useStore({});

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
