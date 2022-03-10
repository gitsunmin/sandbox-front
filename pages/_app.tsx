import type { AppProps } from "next/app";
import "../styles/globals.css";

import DefaultLayout from "../src/layout/DefaultLayout";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@src/config/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>asdasd</title>
      </Head>
      <ThemeProvider theme={theme}>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
