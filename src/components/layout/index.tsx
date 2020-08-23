import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import HeaderComponent from 'src/components/header';
import SlideMenu from 'src/components/burger-menu';
import styles from './layout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type LayoutProps = {
  children: React.ReactNode;
  fluid?: boolean;
  backgroundColor?: string;
  className?: string;
};

export default function Layout({
  children,
  fluid,
  backgroundColor,
  className,
}: LayoutProps) {
  const mainStyle: {
    backgroundColor?: string;
  } = {};

  if (backgroundColor) mainStyle.backgroundColor = backgroundColor;

  return (
    <>
      <Head>
        <title>ACCY 570</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="apple-mobile-web-app-title" content="ACCY 570" />
        <meta name="application-name" content="ACCY 570" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#e84a27" />

        <script src="https://pyodide-cdn2.iodide.io/v0.15.0/full/pyodide.js"></script>
      </Head>

      <div
        id="layout-wrapper"
        className={cx(styles.layoutWrapper, className, {
          fluid,
          fixed: !fluid,
        })}
      >
        <SlideMenu />

        <div id="page-wrap" className={styles.pageWrapper}>
          <HeaderComponent />

          <main className={cx('main')} style={mainStyle}>
            {fluid ? (
              children
            ) : (
              <section className={cx('section')}>
                <div className="container">{children}</div>
              </section>
            )}
          </main>
        </div>
      </div>

      <ToastContainer position="top-center" />
    </>
  );
}
