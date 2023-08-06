import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@mui/material";
import { theme, cacheRtl } from "../styles/styles";
import { CacheProvider } from "@emotion/react";
import { Header } from "@/components";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
