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
        <div>
            <div className="flex items-center py-2">
                <div className="flex-1 text-xl items-center font-bold ">
                    <span>Points: {question.points}</span>
                </div>
                <PaginationControls 
                    currentIndex={currentIndex}
                    totalQuestions={totalQuestions}
                    onPageChange={onPageChange}
                />
            </div>
            <div>
                <p className="flex justify-center pb-4 ">{question.instruction}</p>
            </div>
        </div>
    );
}

export default QuestionDisplay;
