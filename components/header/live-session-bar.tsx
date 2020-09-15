import Link from 'next/link';
import { BiBroadcast } from 'react-icons/bi';
import { motion } from 'framer-motion';
import styles from './live-session-bar.module.scss';
import classNames from 'classnames/bind';
import useLiveSessionStore from 'stores/useLiveSessionStore';

const cx = classNames.bind(styles);

export default function LiveSessionBar({ show }) {
  const netId = useLiveSessionStore((state) => state.netId);
  const setNetId = useLiveSessionStore((state) => state.setNetId);

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

      {netId ? (
        <p>
          In Live Session as {netId} 🚀
          <Link href="/live/join">
            <a className={cx('changeNetIdLink')}>Change NetId</a>
          </Link>{' '}
          or{' '}
          <a
            onClick={(e) => {
              e.preventDefault();
              setNetId('');
            }}
          >
            Leave
          </a>
        </p>
      ) : (
        <p>
          Live Session in Progress 🔥{' '}
          <Link href="/live/join">
            <a className={cx('joinLink')}>Join Now →</a>
          </Link>
        </p>
      )}
    </div>
  ) : null;
}
