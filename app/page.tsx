import Main from "@/components/Main";
import Topbar from "@/components/topbar/Topbar";
import { AttemptedProvider } from "@/context/AttemptedContext";
import { QuestionProvider } from "@/context/QuestionContext";
import { Question } from "@/lib/types";

async function getQuestions() {
  const res = await fetch("http://localhost:8000/api/v1/questions/clerk123");
  const { data } = await res.json();
  return data.questions;
}

async function getAttemptedQuestions() {
  const res = await fetch("http://localhost:8000/api/v1/submissions/clerk123");
  const { data } = await res.json();
  return data;
}

export default async function Home() {
  const questions: Question[] = await getQuestions();
  const attemptedQuestions: string[] = await getAttemptedQuestions();

  return (
    <>
      <QuestionProvider questionsData={questions}>
        <AttemptedProvider attemptedQuestionsData={attemptedQuestions}>
          <Topbar />
          <Main />
        </AttemptedProvider>
      </QuestionProvider>
    </>
  );
}
