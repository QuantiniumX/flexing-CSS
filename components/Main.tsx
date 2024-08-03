"use client";
import React from "react";
import QuestionDisplay from "./question-display/QuestionDisplay";
import CSSEditor from "./question-display/CSSEditor";
import PreviewBox from "./preview-box/PreviewBox";
import { useQuestion } from "@/context/QuestionContext";
import { useAttempted } from "@/context/AttemptedContext";

const Main: React.FC = () => {
  const { currentQuestion } = useQuestion();
  const { attemptedQuestions } = useAttempted();
  return (
    <div className="flex min-h-[100vh] w-full select-none flex-col-reverse items-center justify-around py-10 lg:flex-row xl:py-0 ">
      <div className="order-2 md:order-1 flex-1 justify-center mx-auto h-full px-12 py-20 lg:ml-auto lg:mr-0">
        <div className="mx-auto flex max-w-fit flex-col items-center gap-8 justify-between md:flex-row">
          <QuestionDisplay />
        </div>
        <p className="flex justify-center mx-auto my-12 max-w-xl ">
          {currentQuestion?.instructions}
        </p>
        {attemptedQuestions.includes(currentQuestion._id) ? (
          <p>
            You have successfully attempted this question please try another one
          </p>
        ) : (
          <CSSEditor />
        )}
      </div>
      <div className="order-2 md:order-1">
        <PreviewBox />
      </div>
    </div>
  );
};

export default Main;
