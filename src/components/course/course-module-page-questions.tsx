import { IQuestion } from 'typings/question';
import classNames from 'classnames/bind';
import styles from './course-module-page-questions.module.scss';
import QuestionComponent from 'src/components/question';

const cx = classNames.bind(styles);

type CourseModulePagequestionsProps = {
  questions: IQuestion[];
};

export default function CourseModulePageQuestions({
  questions,
}: CourseModulePagequestionsProps) {
  return (
    <>
      {questions.map((question) => (
        <div key={question.id} className={cx('challengeWrapper')}>
          <QuestionComponent question={question} />
        </div>
      ))}
    </>
  );
}
