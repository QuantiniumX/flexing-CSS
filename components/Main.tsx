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
  const { currentQuestionIndex } = useQuestion();
  return (
    <div className="flex min-h-[100vh] select-none flex-col-reverse items-center justify-around py-10 lg:flex-row xl:py-0 ">
      <div className="relative flex min-h-[50vh] w-full flex-col items-center justify-center lg:min-h-screen lg:w-1/2">
        <div className="mx-auto h-full w-[98%] max-w-[1000px] px-12 py-20 lg:ml-auto lg:mr-0">
          <div className="mx-auto flex max-w-xl flex-col items-center justify-between md:flex-row">
            <QuestionDisplay />
          </div>
          <div className="relative mx-auto px-4 my-12 max-w-xl">
            <p className="text-base font-bold absolute top-[-12px] left-[15%] bg-white px-[10px]">
              Question No: {currentQuestionIndex + 1}
            </p>
            <p className="border-black border rounded p-4">
              {currentQuestion?.instructions}
            </p>
          </div>
          {attemptedQuestions.includes(currentQuestion._id) ? (
            <p className="mx-auto px-4 max-w-xl font-semibold text-lg my-12 py-12">
              You have successfully attempted this question please try another
              one
            </p>
          ) : (
            <CSSEditor />
          )}
        </div>
      </div>
      <div className="relative mx-auto h-[300px] w-[300px] rounded-xl bg-cover lg:h-[500px] lg:w-[500px] xl:h-[550px] xl:w-[550px] bg-center">
        <PreviewBox />
      </div>
    </div>
  );
};

export default Main;
