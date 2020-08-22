import {
  getAllMultipleChoiceQuestionIds,
  getMultipleChoiceQuestion,
} from 'lib/questions';
import MultipleChoiceQuestion from 'src/components/question/multiple-choice';
import { IMultipleChoiceQuestion } from 'typings/question';
import Layout from 'src/components/layout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { motion } from 'framer-motion';

type MultipleChoiceQuestionPageProps = {
  question: IMultipleChoiceQuestion;
};

export default function MultipleChoiceQuestionPage({
  question,
}: MultipleChoiceQuestionPageProps) {
  return (
    <Layout>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <div>Question ID: {question.id}</div>

        <MultipleChoiceQuestion
          question={question}
          afterSubmit={() => {
            // do nothing
          }}
        />
      </motion.div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const questionIds = await getAllMultipleChoiceQuestionIds();
  const paths = questionIds.map((questionId) => ({
    params: {
      id: questionId,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const question = await getMultipleChoiceQuestion(params.id as string);

  return {
    props: {
      question,
    },
  };
};
