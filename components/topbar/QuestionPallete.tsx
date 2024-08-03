import React from "react";
import { useQuestion } from "@/context/QuestionContext";
import { useAttempted } from "@/context/AttemptedContext";

interface Question {
  id: number;
  instruction: string;
  difficulty: string;
  points: string;
}

interface QuestionPaletteProps {
  onClose: () => void;
}

const QuestionPalette: React.FC<QuestionPaletteProps> = ({ onClose }) => {
  const { attemptedQuestions } = useAttempted();
  const { questions, currentQuestionIndex, setCurrentQuestionIndex } =
    useQuestion();

  const handleQuestionSelect = (index: number) => {
    setCurrentQuestionIndex(index);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto mx-28">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Question Palette</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <div className="flex gap-5 items-center justify-around">
          {questions.map((question, index) => (
            <button
              key={question.questionId}
              onClick={() => handleQuestionSelect(index)}
              className={`w-8 h-8 flex justify-center items-center rounded
                                ${
                                  currentQuestionIndex === index
                                    ? "bg-blue-500 text-white"
                                    : attemptedQuestions.includes(question._id)
                                      ? "bg-green-500 text-white"
                                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionPalette;
