import React from "react";
import PaginationControls from "./PaginationControl";

interface QuestionDisplayProps {
    question: {
        points: string;
        instruction: string;
    };
    currentIndex: number;
    totalQuestions: number;
    onPageChange: (index: number) => void;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ question, currentIndex, totalQuestions, onPageChange }) => {
    return (
        <>
            <div className="text-center text-xl font-bold tracking-wider lg:text-left">
                <span>Points: {question.points}</span>
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
}

export default QuestionDisplay;
