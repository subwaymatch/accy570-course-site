import styles from './multiple-choice-question.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type ChoiceOptionProps = {
  labelHtml: string;
  isSelected: boolean;
  isCorrectOption: boolean;
  onClick: () => void;
};

export default function ChoiceOption({
  labelHtml,
  isSelected,
  isCorrectOption,
  onClick,
}: ChoiceOptionProps) {
  const isUserCorrect = isSelected === isCorrectOption;

  return (
    <div
      className={cx('optionItem', {
        isCorrectOption,
        isSelected,
        isUserCorrect,
      })}
      onClick={onClick}
    >
      <div className={styles.checkIndicator}>
        <span className={styles.checkmark}>✓</span>
      </div>
      <div
        className={styles.labelText}
        dangerouslySetInnerHTML={{ __html: labelHtml }}
      />
    </div>
  );
}
