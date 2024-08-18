"use client"
import Main from "@/components/Main";
import Topbar from "@/components/topbar/Topbar";
import { useAttempted, AttemptedProvider } from "@/context/AttemptedContext";
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
function getQuestions() {
  const data = objectStyle.questions;
  return data;
}

export default function Page() {
  const questions: Question[] = getQuestions();

  return (
    <QuestionProvider questionsData={questions}>
      <AttemptedProvider>
        <Topbar />
        <Main />
      </AttemptedProvider>
    </QuestionProvider>
  );
}
