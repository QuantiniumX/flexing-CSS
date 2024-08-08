import Main from "@/components/Main";
import QuizEnd from "@/components/QuizEnd";
import Topbar from "@/components/topbar/Topbar";
import { AttemptedProvider } from "@/context/AttemptedContext";
import { QuestionProvider } from "@/context/QuestionContext";
import { Question } from "@/lib/types";
import { auth } from "@clerk/nextjs/server";

async function getQuestions(userId: string) {
  const res = await fetch(
    process.env.BACKEND_URL + "/api/v1/questions/" + userId,
  );
  const { data } = await res.json();
  return data.questions;
}

async function getAttemptedQuestions(userId: string) {
  const res = await fetch(
    process.env.BACKEND_URL + "/api/v1/submissions/" + userId,
    {
      cache: "no-store",
    },
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

export default async function Page() {
  const { userId } = auth();
  if (!userId) return;

  const questions: Question[] = await getQuestions(userId);
  const attemptedQuestions: string[] = await getAttemptedQuestions(userId);
  const time: number = await getTime();

  if (time <= 0) return <QuizEnd />;

  return (
    <QuestionProvider questionsData={questions}>
      <AttemptedProvider attemptedQuestionsData={attemptedQuestions}>
        <Topbar time={time} />
        <Main />
      </AttemptedProvider>
    </QuestionProvider>
  );
}
