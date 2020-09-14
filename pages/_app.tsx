import { AppProps } from 'next/app';
import { IconContext } from 'react-icons';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

import 'styles/global.scss';
// import 'highlight.js/styles/shades-of-purple.css';
// import 'highlight.js/styles/an-old-hope.css';
import 'highlight.js/styles/vs2015.css';
// import 'styles/hljs.custom.scss';
import 'tippy.js/dist/tippy.css'; // optional
import 'tippy.js/themes/light.css';
import 'react-toastify/dist/ReactToastify.css';
import 'styles/toastify.custom.scss';

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
