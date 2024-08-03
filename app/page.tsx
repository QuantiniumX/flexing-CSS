import Main from "@/components/Main";
import Topbar from "@/components/topbar/Topbar";
import { QuestionProvider } from "@/context/QuestionContext";
import { Question } from "@/lib/types";

async function getQuestions() {
  const res = await fetch("http://localhost:8000/api/v1/questions/clerk123");
  const { data } = await res.json();
  return data.questions;
}

export default async function Home() {
  const questions: Question[] = await getQuestions();

  return (
    <>
      <QuestionProvider questionsData={questions}>
        <Topbar />
        <Main />
      </QuestionProvider>
    </>
  );
}
