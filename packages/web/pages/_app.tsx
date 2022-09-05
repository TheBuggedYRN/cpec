import type { AppProps } from "next/app";
import "../styles/globals.css";

function CpecWebApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default CpecWebApp;
