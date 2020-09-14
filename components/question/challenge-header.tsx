import styles from './challenge-header.module.scss';
import Tippy from '@tippyjs/react';
import { FiArrowDownRight } from 'react-icons/fi';

type ChallengeHeaderProps = {
  label: string;
  questionFullId?: string;
};

export default function ChallengeHeader({
  label,
  questionFullId,
}: ChallengeHeaderProps) {
  return (
    <div className={styles.questionHeader}>
      <span className={styles.questionTitle}>{label}</span>

      <Tippy
        content={questionFullId}
        className="tippy"
        theme="light"
        placement="right"
        disabled={!questionFullId}
      >
        <div>
          <FiArrowDownRight className={styles.reactIcon} />
        </div>
      </Tippy>
    </div>
  );
}
