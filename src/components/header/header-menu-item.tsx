import { ReactChild } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import classNames from 'classnames/bind';
import styles from './header-menu-item.module.scss';

const cx = classNames.bind(styles);

type PropTypes = {
  href: string;
  iconChild: ReactChild;
  label: string;
  active: boolean;
};

export default function HeaderMenuItem({
  href,
  iconChild,
  label,
  active,
}: PropTypes) {
  return (
    <Link href={href}>
      <motion.a
        className={cx('menuItem', {
          active,
        })}
        whileHover={{
          y: 2,
          transition: {
            duration: 0.1,
          },
        }}
        whileTap={{
          scale: 0.97,
        }}
      >
        <div className={cx('menuIconWrapper')}>{iconChild}</div>

        <span>{label}</span>
      </motion.a>
    </Link>
  );
}
