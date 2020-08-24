import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './header.module.scss';
import { IoIosFiling } from 'react-icons/io';
import { BsCalendar, BsBook } from 'react-icons/bs';
import { BiBroadcast } from 'react-icons/bi';
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
              active={router.pathname === '/'}
              iconChild={<IoIosFiling />}
              label="Syllabus"
            />
            <MenuItem
              href="/schedule"
              active={router.pathname === '/schedule'}
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
              href="/live"
              active={router.pathname.startsWith('/live')}
              iconChild={<BiBroadcast />}
              label="Live"
              show={false}
            />
          </nav>
        )}
      </div>

      <div className={styles.headerRight}>&nbsp;</div>
    </header>
  );
}
