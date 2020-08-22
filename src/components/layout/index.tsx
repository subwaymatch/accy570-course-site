import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import HeaderComponent from 'src/components/header';
import SlideMenu from 'src/components/burger-menu';
import styles from './layout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type LayoutProps = { children: React.ReactNode; fluid?: boolean };

export default function Layout({ children, fluid }: LayoutProps) {
  return (
    <>
      <Head>
        <title>ACCY 570</title>
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>

      <div
        id="layout-wrapper"
        className={cx(styles.layoutWrapper, {
          fluid,
          fixed: !fluid,
        })}
      >
        <SlideMenu />

        <div id="page-wrap" className={styles.pageWrapper}>
          <HeaderComponent />

          <section className={cx('section', 'main')}>
            {fluid ? (
              children
            ) : (
              <div className="container is-widescreen">{children}</div>
            )}
          </section>
        </div>
      </div>

      <ToastContainer position="top-center" />
    </>
  );
}
