import Main from "@/components/Main";
import Topbar from "@/components/Topbar";
import { QuestionProvider } from "@/context/QuestionContext";
import { Question } from "@/lib/types";

async function getQuestions() {
  const res = await fetch("localhost:8000/api/v1/questions");
  const data = await res.json();
  return data;
}

export default async function Home() {
  const questions: Question[] = await getQuestions();

  return (
    <>
      <QuestionProvider>
        <Topbar />
        <Main questions={questions} />
      </QuestionProvider>
    </>
  );
}
