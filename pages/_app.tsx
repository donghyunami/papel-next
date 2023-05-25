import Head from "next/head";
import { AppProps } from "next/app";
import { theme } from "@/libs/theme";
import { ThemeProvider } from "@emotion/react";
import GlobalStyles from '@mui/material/GlobalStyles';
import { reset } from "styles/reset";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Papel</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={reset} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
