"use client"
import Main from "@/components/Main";
import Topbar from "@/components/topbar/Topbar";
import { useAttempted, AttemptedProvider } from "@/context/AttemptedContext";
import { QuestionProvider } from "@/context/QuestionContext";
import { Question } from "@/lib/types";
import objectStyle from "../public/objectStyle.json"
import { useEffect } from "react";
import CongratulationsModal from "@/components/CongratulationsModal"
import { useState } from "react";

function getQuestions() {
  const data = objectStyle.questions;
  return data;
}

function Content() {
  const questions: Question[] = getQuestions();
  const { attemptedQuestions } = useAttempted();
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    if (attemptedQuestions.length === questions.length) {
      setShowModal(true);
    }
  }, [attemptedQuestions, questions.length]);

  return (
    <>
      <Topbar />
      <Main />
      {showModal && <CongratulationsModal onClose={() => setShowModal(false)} />}
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
