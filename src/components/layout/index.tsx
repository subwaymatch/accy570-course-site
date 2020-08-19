import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import HeaderComponent from 'src/components/header';
import SlideMenu from 'src/components/burger-menu';
import styles from './layout.module.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

type LayoutProps = { children: React.ReactNode; fluid?: boolean };

export default function Layout({ children, fluid }: LayoutProps) {
  return (
    <>
      <Head>
        <title>ACCY 570</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className={cx('layoutWrapper', {
          fluid,
          fixed: !fluid,
        })}
      >
        <SlideMenu />

        <div id="page-wrap" className={styles.pageWrapper}>
          <HeaderComponent />

          {fluid ? (
            children
          ) : (
            <main className={styles.main}>
              <div className="container">
                <div className="row">{children}</div>
              </div>
            </main>
          )}
        </div>
      </div>

      <ToastContainer position="top-center" />
    </>
  );
}
