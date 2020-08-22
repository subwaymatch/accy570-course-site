import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './header.module.scss';
import { BsFillLayersFill, BsCalendar, BsBook } from 'react-icons/bs';
import { FaPython } from 'react-icons/fa';
import classNames from 'classnames/bind';
import MenuItem from './header-menu-item';

const cx = classNames.bind(styles);

type HeaderComponentProps = {
  headerTitle?: string;
};

export default function HeaderComponent({ headerTitle }: HeaderComponentProps) {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <Link href="/">
          <a className={styles.siteTitle}>Accy 570</a>
        </Link>
      </div>

      <div className={styles.headerCenter}>
        {headerTitle ? (
          <h1>{headerTitle}</h1>
        ) : (
          <nav className={cx('is-hidden-touch', 'headerMainMenu')}>
            <MenuItem
              href="/"
              active={false}
              iconChild={<BsCalendar />}
              label="Schedule"
            />

            <MenuItem
              href="/course"
              active={
                router.pathname === '/course' ||
                router.pathname.startsWith('/course/')
              }
              iconChild={<BsBook />}
              label="Learn"
            />

            <MenuItem
              href="/question"
              active={
                router.pathname === '/question' ||
                router.pathname.startsWith('/question/')
              }
              iconChild={<BsFillLayersFill />}
              label="Questions"
            />

            <MenuItem
              href="/pyodide-test"
              active={router.pathname.startsWith('/playground')}
              iconChild={<FaPython />}
              label="Playground"
            />
          </nav>
        )}
      </div>

      <div className={styles.headerRight}>&nbsp;</div>
    </header>
  );
}
