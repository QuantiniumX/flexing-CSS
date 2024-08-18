"use client"
import Main from "@/components/Main";
import Topbar from "@/components/topbar/Topbar";
import { useAttempted, AttemptedProvider } from "@/context/AttemptedContext";
import { QuestionProvider } from "@/context/QuestionContext";
import { Question } from "@/lib/types";
import objectStyle from "../public/objectStyle.json"
import { useEffect } from "react";

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

function Content() {
  const questions: Question[] = getQuestions();
  const { attemptedQuestions } = useAttempted();

  useEffect(() => {
    if (attemptedQuestions.length === questions.length) {
      console.log("YOU WIN");
    }
  }, [attemptedQuestions, questions.length]);

  return (
    <>
      <Topbar />
      <Main />
    </>
  );
}

export default function Page() {
  return (
    <AttemptedProvider>
      <QuestionProvider questionsData={getQuestions()}>
        <Content />
      </QuestionProvider>
    </AttemptedProvider>
  );
}
