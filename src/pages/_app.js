import { AuthModalContext } from "@/shared/contexts";
import store from "@/shared/store";
import "@/shared/styles/globals.css";
import "@/shared/styles/normalize.css";
import { useState } from "react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  const [authModal, setAuthModal] = useState(false);
  return (
    <AuthModalContext.Provider value={{ authModal, setAuthModal }}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthModalContext.Provider>
  );
}
