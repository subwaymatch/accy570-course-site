import { useEffect } from 'react';
import {
  IQuestion,
  QuestionType,
  IMultipleChoiceQuestion,
  IPythonCodingQuestion,
} from 'typings/question';
import MultipleChoiceQuestion from './multiple-choice';
import PythonCodingQuestion from './python-coding';
import useLiveSessionStore from 'stores/useLiveSessionStore';
import { getQuestionFullId } from 'lib/utils-browser';

type QuestionComponentProps = {
  question: IQuestion;
};

export default function QuestionComponent({
  question,
}: QuestionComponentProps) {
  const netId = useLiveSessionStore((state) => state.netId);
  const saveResponse = useLiveSessionStore((state) => state.saveResponse);

  const afterSubmit = (isSuccess) =>
    netId
      ? saveResponse(getQuestionFullId(question.type, question.id), isSuccess)
      : () => {};

  switch (question.type) {
    case QuestionType.MultipleChoice:
      return (
        <MultipleChoiceQuestion
          question={question as IMultipleChoiceQuestion}
          afterSubmit={afterSubmit}
        />
      );
    case QuestionType.PythonCoding:
      return (
        <PythonCodingQuestion
          question={question as IPythonCodingQuestion}
          afterSubmit={afterSubmit}
        />
      );
    default:
      return <div>Not implemented yet</div>;
  }
}
