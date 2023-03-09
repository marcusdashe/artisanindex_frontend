import "@/styles/globals.css";
import "babel-polyfill";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
