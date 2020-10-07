import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './header.module.scss';
import { IoIosFiling } from 'react-icons/io';
import { BsCalendar, BsBook } from 'react-icons/bs';
import { BiBroadcast } from 'react-icons/bi';
import classNames from 'classnames/bind';
import MenuItem from './header-menu-item';
import LiveSessionBar from './live-session-bar';

const cx = classNames.bind(styles);

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <LiveSessionBar show={true} />

      <div className={styles.headerMenuWrapper}>
        <nav className={cx('headerMenu')}>
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
      </div>
    </header>
  );
}
