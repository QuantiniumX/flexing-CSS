import Main from "@/components/Main";
import Topbar from "@/components/topbar/Topbar";
import { AttemptedProvider } from "@/context/AttemptedContext";
import { QuestionProvider } from "@/context/QuestionContext";
import { Question } from "@/lib/types";

async function getQuestions() {
  const res = await fetch(
    process.env.BACKEND_URL + "/api/v1/questions/clerk123",
  );
  const { data } = await res.json();
  return data.questions;
}

async function getAttemptedQuestions() {
  const res = await fetch(
    process.env.BACKEND_URL + "/api/v1/submissions/clerk123",
  );
  const { data } = await res.json();
  return data;
}

async function getTime() {
  const res = await fetch(process.env.BACKEND_URL + "/api/v1/clock/getClock", {
    cache: "no-store",
  });
  const { data } = await res.json();
  const endTime = new Date(data);
  return Math.floor((endTime.getTime() - Date.now() - 5000) / 1000);
}

export default async function Home() {
  const questions: Question[] = await getQuestions();
  const attemptedQuestions: string[] = await getAttemptedQuestions();
  // -FIX:   UNCOMMENT BELOW AND REMOVE THE HARDCODED TIME
  //   const time: number = await getTime();
  const time: number = 3000;

  if (time < 0)
    return <p>The Quiz has ended!!! See You soon in some other contest.</p>;

  return (
    <>
      <QuestionProvider questionsData={questions}>
        <AttemptedProvider attemptedQuestionsData={attemptedQuestions}>
          <Topbar time={time} />
          <Main />
        </AttemptedProvider>
      </QuestionProvider>
    </>
  );
}
