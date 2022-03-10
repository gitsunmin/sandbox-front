import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";

import theme from "@src/config/theme";
import DefaultLayout from "@src/layout/DefaultLayout";
import { MenuName } from '@src/config/menuList';
import CssBaseline from "@mui/material/CssBaseline";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{MenuName.MAIN}</title>
      </Head>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
