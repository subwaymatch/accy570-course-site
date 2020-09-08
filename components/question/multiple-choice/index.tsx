import { useState } from 'react';
import styles from './multiple-choice-question.module.scss';
import classNames from 'classnames/bind';
import { IMultipleChoiceQuestion } from 'typings/question';
import ChoiceOption from 'components/question/multiple-choice/choice-option';
import _ from 'lodash';
import ChallengeHeader from '../challenge-header';
import { CorrectResultBox, IncorrectResultBox } from '../message-boxes';

const cx = classNames.bind(styles);

type MultipleChoiceQuestionProps = {
  question: IMultipleChoiceQuestion;
  afterSubmit?: (isCorrect) => void;
};

export default function MultipleChoiceQuestion({
  question,
  afterSubmit,
}: MultipleChoiceQuestionProps) {
  const { options, correctOptions, text, hint, explanation } = question;

  const [selectedOptions, setSelectedOptions] = useState<boolean[]>(
    new Array(options.length).fill(false)
  );
  const [didSubmit, setDidSubmit] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const numCorrectOptions = correctOptions.reduce(
    (accumulator, currentValue) => accumulator + (currentValue ? 1 : 0),
    0
  );

  const handleOptionClick = (optionIndex: number) => {
    // If already submitted, do nothing
    if (didSubmit) {
      return;
    }

    if (numCorrectOptions > 1) {
      const selectedOptionsCopy = selectedOptions.slice();
      selectedOptionsCopy[optionIndex] = !selectedOptionsCopy[optionIndex];

      setSelectedOptions(selectedOptionsCopy);
    } else {
      const newSelectedOptions = new Array(options.length).fill(false);

      if (!selectedOptions[optionIndex]) {
        newSelectedOptions[optionIndex] = true;
      }

      setSelectedOptions(newSelectedOptions);
    }
  };

  const handleSubmit = () => {
    let isCorrectTemp = selectedOptions.every(
      (didSelectOption, index) => didSelectOption === correctOptions[index]
    );

    setIsCorrect(isCorrectTemp);

    setDidSubmit(true);

    if (afterSubmit) {
      afterSubmit(isCorrectTemp);
    }
  };

  return (
    <div
      className={cx({
        didSubmit,
        isCorrect,
      })}
    >
      <ChallengeHeader label="Multiple Choice Challenge" />

      <div className={styles.questionTextWrapper}>
        <div
          className={styles.questionText}
          dangerouslySetInnerHTML={{ __html: text }}
        />

        {numCorrectOptions > 1 && (
          <p className={styles.selectNMessage}>Select {numCorrectOptions}.</p>
        )}
      </div>

      <div className={styles.optionsWrapper}>
        {options.map((option, index) => (
          <ChoiceOption
            key={index}
            labelHtml={String(option)}
            isSelected={selectedOptions[index]}
            isCorrectOption={correctOptions[index]}
            displayResult={didSubmit}
            onClick={() => handleOptionClick(index)}
          />
        ))}
      </div>

      {question.hint && (
        <div className={styles.hintBox}>
          <span
            className={styles.hintBoxLabel}
            onClick={() => {
              setShowHint(!showHint);
            }}
          >
            Hint {showHint ? '▴' : '▾'}
          </span>
          {showHint && (
            <div className={styles.hintContent}>
              <div>{hint}</div>
            </div>
          )}
        </div>
      )}

      {!didSubmit && (
        <button
          className={styles.submitBtn}
          onClick={handleSubmit}
          disabled={_.sum(selectedOptions) !== numCorrectOptions}
        >
          Check Your Answer!
        </button>
      )}

      <div className={styles.resultBoxWrapper}>
        <CorrectResultBox show={didSubmit && isCorrect} />
        <IncorrectResultBox
          show={didSubmit && !isCorrect}
          message="Oops, nice try!"
        />
      </div>

      {didSubmit && (
        <div className={styles.explanationBox}>
          <span className={styles.explanationBoxLabel}>Explanation</span>

          <div dangerouslySetInnerHTML={{ __html: explanation }} />
        </div>
      )}
    </div>
  );
}
