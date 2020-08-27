import { motion } from 'framer-motion';
import { MdPlayArrow, MdPlayForWork } from 'react-icons/md';
import { FaUndo } from 'react-icons/fa';
import styles from './buttons.module.scss';

const buttonVariants = {
  hover: {
    y: 2,
    transition: {
      duration: 0.1,
    },
  },
  tap: {
    scale: 0.98,
  },
};

type RunCodeButtonProps = {
  label?: string;
  disabled: boolean;
  onClick(): void;
};

export const RunCodeButton = ({
  label,
  disabled,
  onClick,
}: RunCodeButtonProps) => {
  return (
    <motion.button
      className={styles.runCodeButton}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      disabled={disabled}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      <MdPlayArrow className={styles.buttonIcon} />
      <span>{label ? label : 'Run'}</span>
    </motion.button>
  );
};

type SubmitButtonProps = {
  label?: string;
  disabled: boolean;
  onClick(): void;
};

export const SubmitButton = ({
  label,
  disabled,
  onClick,
}: SubmitButtonProps) => {
  return (
    <motion.button
      className={styles.submitButton}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      disabled={disabled}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      <MdPlayForWork className={styles.buttonIcon} />
      <span>{label ? label : 'Submit'}</span>
    </motion.button>
  );
};

type ResetButtonProps = {
  label?: string;
  disabled?: boolean;
  onClick(): void;
};

export const ResetButton = ({ label, disabled, onClick }: ResetButtonProps) => {
  return (
    <motion.button
      className={styles.resetButton}
      onClick={onClick}
      disabled={disabled}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      <FaUndo className={styles.buttonIcon} />
      <span>{label ? label : 'Reset'}</span>
    </motion.button>
  );
};

type BasicButtonProps = {
  iconChild?: React.ReactChild;
  label?: string;
  show?: boolean;
  disabled?: boolean;
  onClick(): void;
};

export const BasicButton = ({
  iconChild,
  label,
  show,
  disabled,
  onClick,
}: BasicButtonProps) => {
  if (typeof show === 'undefined') {
    show = true;
  }

  return (
    <motion.button
      className={styles.basicButton}
      onClick={onClick}
      disabled={disabled}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      {iconChild}

      <span>{label ? label : 'Reset'}</span>
    </motion.button>
  );
};
