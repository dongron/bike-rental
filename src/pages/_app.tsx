import '../styles/global.css';
import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar
      closeOnClick
      pauseOnHover
      theme="light"
      closeButton={false}
    />
    <Component {...pageProps} />
  </>
);

export default MyApp;
