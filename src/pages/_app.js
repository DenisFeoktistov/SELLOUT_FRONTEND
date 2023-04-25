import store from "@/shared/store";
import "@/shared/styles/globals.css";
import "@/shared/styles/normalize.css";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
