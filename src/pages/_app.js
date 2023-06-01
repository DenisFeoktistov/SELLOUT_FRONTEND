import { AuthModal } from "@/modules/Modals";
import { AuthModalContext, UserContext } from "@/shared/contexts";
import store from "@/shared/store";
import "bootstrap/dist/css/bootstrap.css";
import { MantineProvider, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { Provider } from "react-redux";
import { SSRProvider } from "react-bootstrap";

export default function App({ Component, pageProps }) {
  //состояние модалки авторизации
  const [opened, { open, close }] = useDisclosure(false);

  //ссылка для редиректа после авторизации
  const [callbackUrl, setCallbackUrl] = useState();

  const [user, setUser] = useState(null);

  return (
    <SSRProvider>
      <UserContext.Provider value={{ user, setUser }}>
        <AuthModalContext.Provider
          value={{ open, close, opened, callbackUrl, setCallbackUrl }}
        >
          <MantineProvider
            theme={{
              fontFamily: "Montserrat, serif",
              colors: {
                black: [
                  "#000000",
                  "#000000",
                  "#000000",
                  "#000000",
                  "#000000",
                  "#000000",
                  "#000000",
                  "#000000",
                  "#000000",
                  "#000000",
                ],
              },
            }}
          >
            <Provider store={store}>
              <Component {...pageProps} />
              <Modal
                radius={"lg"}
                w={"100vw"}
                size={"md"}
                opened={opened}
                onClose={close}
                centered
              >
                <AuthModal />
              </Modal>
            </Provider>
          </MantineProvider>
        </AuthModalContext.Provider>
      </UserContext.Provider>
    </SSRProvider>
  );
}
