import React from "react";
import PaginationControls from "./PaginationControl";
import { useQuestion } from "@/context/QuestionContext";

const QuestionDisplay: React.FC<QuestionDisplayProps> = () => {
  const { questions, currentQuestionIndex, setCurrentQuestionIndex } =
    useQuestion();

  const onPageChange = (index: number) => {
    setCurrentQuestionIndex(index);
  };
  return (
    <>
      <div className="text-center text-xl min-w-fit font-bold tracking-wider lg:text-left">
        <span>Question No: {currentQuestionIndex + 1}</span>
      </div>
      <div className="flex self-center min-w-fit border-black border-2 rounded mt-6 items-center bg-slate-200 bg-opacity-25 px-4 md:mt-0">
        <PaginationControls
          currentIndex={currentQuestionIndex}
          totalQuestions={questions.length}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
};

export default QuestionDisplay;
