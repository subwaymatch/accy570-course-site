import { useRouter } from "next/router";
import {
  getAllMultipleChoiceQuizIds,
  getMultipleChoiceQuizData,
} from "../../../lib/quizzes";
import MultipleChoiceQuestion from "../../../components/MultipleChoiceQuestion";

export default function QuizPage({ quizData }) {
  console.log(quizData);

  const router = useRouter();
  const { id: quizId } = router.query;

  return (
    <div>
      <div>Quiz: {quizId}</div>
      <MultipleChoiceQuestion quizData={quizData} />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllMultipleChoiceQuizIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const quizData = getMultipleChoiceQuizData(params.id);

  return {
    props: {
      quizData,
    },
  };
}
