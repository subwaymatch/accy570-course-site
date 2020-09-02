import styles from './multiple-choice-question.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type ChoiceOptionProps = {
  labelHtml: string;
  isSelected: boolean;
  isCorrectOption: boolean;
  displayResult: boolean;
  onClick: () => void;
};

export default function ChoiceOption({
  labelHtml,
  isSelected,
  isCorrectOption,
  displayResult,
  onClick,
}: ChoiceOptionProps) {
  const isUserCorrect = isSelected === isCorrectOption;

  return (
    <div
      className={cx('optionItem', {
        isSelected,
        isUserCorrect,
        isUserIncorrect: !isUserCorrect,
        isCorrectOption,
        displayResult,
      })}
      onClick={onClick}
    >
      <div className={styles.checkIndicator}>
        {!displayResult && isSelected && (
          <span className={styles.selectMark}>→</span>
        )}

        {displayResult && isSelected && isUserCorrect && (
          <span className={styles.correctMark}>✓</span>
        )}
        {displayResult && isSelected && !isUserCorrect && (
          <span className={styles.incorrectMark}>✗</span>
        )}
      </div>
      <div
        className={styles.labelText}
        dangerouslySetInnerHTML={{ __html: labelHtml }}
      />
    </div>
  );
}
