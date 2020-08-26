import { ReactChild } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import classNames from 'classnames/bind';
import styles from './header-menu-item.module.scss';
import { clickableVariants } from 'src/animations/variants';

const cx = classNames.bind(styles);

type PropTypes = {
  href: string;
  iconChild: ReactChild;
  label: string;
  active: boolean;
  show?: boolean;
};

export default function HeaderMenuItem({
  href,
  iconChild,
  label,
  active,
  show,
}: PropTypes) {
  if (typeof show === 'undefined') {
    show = true;
  }

  return show === true ? (
    <Link href={href}>
      <motion.a
        className={cx('menuItem', {
          active,
        })}
        variants={clickableVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <div className={cx('menuIconWrapper')}>{iconChild}</div>

        <span>{label}</span>
      </motion.a>
    </Link>
  ) : null;
}
