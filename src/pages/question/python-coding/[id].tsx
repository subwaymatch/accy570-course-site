import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from 'src/components/layout';
import PythonCodingQuestion from 'src/components/question/python-coding';
import { IPythonCodingQuestion } from 'typings/question';
import {
  getAllPythonCodingQuestionIds,
  getPythonCodingQuestion,
} from 'lib/questions';
import { motion } from 'framer-motion';

export default function PythonCodingQuestionPage(props: any) {
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
        <PythonCodingQuestion question={props.question} />
      </motion.div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const questionIds = await getAllPythonCodingQuestionIds();
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
  const question: IPythonCodingQuestion = await getPythonCodingQuestion(
    params.id as string
  );

  return {
    props: {
      question,
    },
  };
};
