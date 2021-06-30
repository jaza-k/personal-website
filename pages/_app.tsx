import type { AppProps } from "next/app";
import "../styles/index.sass";
import "../styles/content.sass";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
