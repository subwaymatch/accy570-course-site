import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { IconContext } from 'react-icons';
import { AnimatePresence } from 'framer-motion';
import { Fuego, FuegoProvider } from '@nandorojo/swr-firestore';
import { firebaseConfig } from 'firebase/clientApp';

import 'styles/global.scss';
import 'highlight.js/styles/vs2015.css';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import 'react-toastify/dist/ReactToastify.css';
import 'styles/toastify.custom.scss';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const fuego = new Fuego(firebaseConfig);

  return (
    <FuegoProvider fuego={fuego}>
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
    </FuegoProvider>
  );
}
