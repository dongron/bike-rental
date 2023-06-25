import '../styles/global.css';
import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

import { GoogleAdsense } from '@/components/third-parties/google-adsense';
import { GoogleAnalytics } from '@/components/third-parties/google-analytics';

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
    <GoogleAnalytics />
    <GoogleAdsense />
  </>
);

export default MyApp;
