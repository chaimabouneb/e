import "../styles/globals.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
export default App;
