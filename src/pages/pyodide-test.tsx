import { GetStaticProps } from 'next';
import Layout from 'src/components/layout';
import PythonCodingQuestion from 'src/components/question/python-coding';
import { IPythonCodingQuestion } from 'typings/question';
import { getQuestionByFullId } from 'lib/questions';
import { motion } from 'framer-motion';

export default function PyodideTest(props: any) {
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

export const getStaticProps: GetStaticProps = async () => {
  const question: IPythonCodingQuestion = (await getQuestionByFullId(
    'python-coding/print-hello-world'
  )) as IPythonCodingQuestion;

  return {
    props: {
      question,
    },
  };
};
