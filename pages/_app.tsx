import type { AppProps } from 'next/app';
import GlobalStyle from '../utils/GlobalStyle';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
      ;
    </>
  );
}

export default App;
