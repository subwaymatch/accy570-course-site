import styles from './challenge-header.module.scss';
import { FiArrowDownRight } from 'react-icons/fi';

export default function ChallengeHeader({ label }) {
  return (
    <div className={styles.questionHeader}>
      <span className={styles.questionTitle}>{label}</span>
      <FiArrowDownRight className={styles.reactIcon} />
    </div>
  );
}
