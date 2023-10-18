import { Html, Head, Main, NextScript } from "next/document";
import { Children } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import App from "../components/App";
import { StoreProvider } from "../redux/StoreProvider";
export default function Document({ Children }) {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <StoreProvider>
          <App>{Children}</App>
        </StoreProvider>
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
