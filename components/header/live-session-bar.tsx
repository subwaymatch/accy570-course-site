import Link from 'next/link';
import { BiBroadcast } from 'react-icons/bi';
import { motion } from 'framer-motion';
import styles from './live-session-bar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function LiveSessionBar({ show }) {
  return show ? (
    <div className={cx('liveSessionBar')}>
      <motion.span
        animate={{
          opacity: [0.5, 1, 1],
          transition: {
            yoyo: Infinity,
            duration: 0.7,
          },
        }}
      >
        <BiBroadcast className={cx('liveIcon')} />
      </motion.span>

      <p>Live Session in Progress</p>
      <Link href="/live">
        <a className={cx('joinLink')}>Join Now →</a>
      </Link>
    </div>
  ) : null;
}
