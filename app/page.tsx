import Main from "@/components/Main";
import Topbar from "@/components/topbar/Topbar";
import { AttemptedProvider } from "@/context/AttemptedContext";
import { QuestionProvider } from "@/context/QuestionContext";
import { Question } from "@/lib/types";
import objectStyle from "../public/objectStyle.json"

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
*   completed: boolean;
*/
async function getQuestions() {
  const data = objectStyle.questions;
  return data;
}

async function getAttemptedQuestions(userId: string) {
  const data = [
    "1",
    "2"
  ]
  return data;
}

const getUserId = () => {
  return "7";
}


export default async function Page() {
  const userId = getUserId();
  if (!userId) return;

  const questions: Question[] = await getQuestions();
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
