import "../styles/globals.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { StoreProvider } from "../utils/Store";

gsap.registerPlugin(ScrollTrigger);
function App({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
export default App;
