import Link from 'next/link';
import { GetStaticProps } from 'next';
import Layout from 'src/components/layout';
import {
  getAllMultipleChoiceQuestionIds,
  getAllPythonCodingQuestionIds,
} from 'lib/questions';

import styles from './index.module.scss';
import { motion } from 'framer-motion';

type QuestionHomeProps = {
  multipleChoiceIds: string[];
  pythonCodingIds: string[];
};

const transition = { duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { x: 0, scale: 1, opacity: 1, transition },
  exit: {
    x: -20,
    scale: 0.9,
    opacity: 0,
    transition: {
      staggerChildren: 0.2,
      ...transition,
    },
  },
};

export default function QuestionHome({
  multipleChoiceIds,
  pythonCodingIds,
}: QuestionHomeProps) {
  return (
    <Layout fluid>
      <motion.div
        className="container"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={thumbnailVariants}
      >
        <div className="row">
          <div className="col-12">
            <h1>List of Questions</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h2>Multiple Choice</h2>
            {multipleChoiceIds.map((questionId) => (
              <Link
                key={questionId}
                href="/question/multiple-choice/[id]"
                as={`/question/multiple-choice/${questionId}`}
              >
                <motion.a className={styles['questionLink']}>
                  {questionId}
                </motion.a>
              </Link>
            ))}
          </div>

          <div className="col-6">
            <h2>Python Coding</h2>
            {pythonCodingIds.map((questionId) => (
              <Link
                key={questionId}
                href="/question/python-coding/[id]"
                as={`/question/python-coding/${questionId}`}
              >
                <motion.a className={styles['questionLink']}>
                  {questionId}
                </motion.a>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const multipleChoiceIds = await getAllMultipleChoiceQuestionIds();
  const pythonCodingIds = await getAllPythonCodingQuestionIds();

  return {
    props: {
      multipleChoiceIds,
      pythonCodingIds,
    },
  };
};
