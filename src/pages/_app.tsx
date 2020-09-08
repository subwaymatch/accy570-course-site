import { AppProps } from 'next/app';
import { IconContext } from 'react-icons';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

import 'src/styles/global.scss';
import 'highlight.js/styles/shades-of-purple.css';
import 'react-toastify/dist/ReactToastify.css';
import 'src/styles/toastify.custom.scss';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <IconContext.Provider
      value={{
        className: 'react-icon',
        style: { verticalAlign: 'middle' },
      }}
    >
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </IconContext.Provider>
  );
}
