import Main from "@/components/Main";
import QuizEnd from "@/components/QuizEnd";
import Topbar from "@/components/topbar/Topbar";
import { AttemptedProvider } from "@/context/AttemptedContext";
import { QuestionProvider } from "@/context/QuestionContext";
import { Question } from "@/lib/types";
import { auth } from "@clerk/nextjs/server";

/*
* return the question from the backend
* questions: 
*   _id: string;
*   questionId: string;
*   initialCSS: string;
*   instruction: string;
*   answer: string;
*   difficulty: string;
*   createdAt: string -> time;
*   updatedAt: string -> time;
*   points: int;
*   __v: int -> idk what this means;
*   id: string;
*/
async function getQuestions(userId: string) {
  const res = await fetch(
    process.env.BACKEND_URL + "/api/v1/questions/" + userId,
  );
  const { data } = await res.json();
  console.log(data);
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
  console.log(data);
  return data;
}


export default async function Page() {
  const { userId } = auth();
  if (!userId) return;

  const questions: Question[] = await getQuestions(userId);
  const attemptedQuestions: string[] = await getAttemptedQuestions(userId);

  return (
    <QuestionProvider questionsData={questions}>
      <AttemptedProvider attemptedQuestionsData={attemptedQuestions}>
        <Topbar />
        <Main />
      </AttemptedProvider>
    </QuestionProvider>
  );
}
