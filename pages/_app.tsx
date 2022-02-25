import type { AppProps } from "next/app";
import "../styles/globals.css";

import DefaultLayout from "../src/layout/DefaultLayout";
import Head from "next/head";
import { ThemeProvider } from '@mui/material/styles';
import theme from '@src/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
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
