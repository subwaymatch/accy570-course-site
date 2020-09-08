import { motion } from 'framer-motion';
import { clickableVariants } from 'animations/variants';
import { SiZoom } from 'react-icons/si';
import { FiLock } from 'react-icons/fi';
import styles from './zoom-button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const ZoomLinkButton = ({
  label,
  href,
}: {
  label: string;
  href: string;
}) => (
  <motion.a
    variants={clickableVariants}
    whileHover="hover"
    whileTap="tap"
    className={cx('zoomLinkButton')}
    href={href}
  >
    <SiZoom className={cx('zoomIcon')} />
    <span className={cx('label')}>{label}</span>
  </motion.a>
);

export const ZoomPasswordMessage = ({
  customMessage,
}: {
  customMessage?: string;
}) => {
  return (
    <p className={cx('zoomPasswordMessage')}>
      {customMessage ? (
        customMessage
      ) : (
        <>
          <FiLock className={cx('lockIcon')} />
          <span>Password only on Compass due to security reasons</span>
        </>
      )}
    </p>
  );
};
