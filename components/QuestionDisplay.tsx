import React from "react";
import PaginationControls from "./PaginationControl";

interface QuestionDisplayProps {
  question: {
    points: string;
    instruction: string;
    id: number;
  };
  currentIndex: number;
  totalQuestions: number;
  onPageChange: () => void;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  question,
  currentIndex,
  totalQuestions,
  onPageChange,
}) => {
  return (
    <>
      <div className="text-center min-w-fit text-xl font-bold tracking-wider lg:text-left">
        <span>Question No: {currentIndex + 1}</span>
      </div>
      <div className="flex self-center border-black border-2 rounded mt-6 items-center bg-slate-200 bg-opacity-25 px-4 md:mt-0">
        <PaginationControls
          currentIndex={currentIndex}
          totalQuestions={totalQuestions}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
};

export default QuestionDisplay;
