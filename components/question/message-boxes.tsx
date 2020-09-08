import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import styles from './message-boxes.module.scss';
import CuteCatImage from 'images/cute-cartoon-cat.svg';
import CuteFrogImage from 'images/cute-cartoon-frog.svg';
import CutePigImage from 'images/cute-cartoon-pig.svg';

const cx = classNames.bind(styles);

const transition = {
  duration: 0.3,
};
const messageBoxVariant = {
  hidden: {
    opacity: 0,
    height: 0,
    transition,
  },
  visible: {
    opacity: 1,
    height: 'auto',
    transition,
  },
};

// initial, animate, exit

type HintBoxProps = {
  hintMarkdown?: string;
  show: boolean;
  className?: string;
};

export const HintBox = ({ hintMarkdown, show, className }: HintBoxProps) => (
  <>
    {show && (
      <motion.div
        className={cx('hintBox', {
          [className]: !!className,
        })}
        variants={messageBoxVariant}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <div className={cx('inner')}>
          <div className={cx('imageWrapper')}>
            <img
              src={CuteCatImage}
              alt="Image of a cute cat"
              className={styles.characterImage}
            />
          </div>

          <div>
            <span className={styles.boxLabel}>Hint Meow?</span>
            {hintMarkdown && (
              <div dangerouslySetInnerHTML={{ __html: hintMarkdown }} />
            )}
          </div>
        </div>
      </motion.div>
    )}
  </>
);

type CorrectResultBoxProps = {
  explanation?: string;
  show: boolean;
  className?: string;
};

export const CorrectResultBox = ({
  explanation,
  show,
  className,
}: CorrectResultBoxProps) =>
  show && (
    <motion.div
      className={cx('correctResultBox', {
        [className]: !!className,
      })}
      variants={messageBoxVariant}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className={cx('inner')}>
        <div className={cx('imageWrapper')}>
          <img
            src={CuteFrogImage}
            alt="Image of a cute frog"
            className={styles.characterImage}
          />
        </div>

        <div>
          <span className={styles.boxLabel}>Great!</span>

          <div
            dangerouslySetInnerHTML={{
              __html: explanation,
            }}
          />
        </div>
      </div>
    </motion.div>
  );

type IncorrectResultBoxProps = {
  show: boolean;
  message?: string;
  className?: string;
};

export const IncorrectResultBox = ({
  show,
  message,
  className,
}: IncorrectResultBoxProps) =>
  show && (
    <motion.div
      className={cx('incorrectResultBox', {
        [className]: !!className,
      })}
      variants={messageBoxVariant}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className={cx('inner')}>
        <div className={cx('imageWrapper')}>
          <img
            src={CutePigImage}
            alt="Image of a cute pig"
            className={styles.characterImage}
          />
        </div>

        <div>
          <span className={styles.boxLabel}>Oink...</span>

          <div>{message ? message : "Let's give it another try!"}</div>
        </div>
      </div>
    </motion.div>
  );
