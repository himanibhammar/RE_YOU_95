import "@/styles/globals.css";
import '@fontsource/inter/400.css'; 
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
