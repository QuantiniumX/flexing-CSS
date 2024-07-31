import React from 'react';

interface Question {
    id: number;
    instruction: string;
    difficulty: string;
    points: string;
}

interface QuestionPaletteProps {
    questions: Question[];
    currentQuestionIndex: number;
    attemptedQuestions: Set<number>;
    onQuestionSelect: (index: number) => void;
    onClose: () => void;
}

const QuestionPalette: React.FC<QuestionPaletteProps> = ({
    questions,
    currentQuestionIndex,
    attemptedQuestions,
    onQuestionSelect,
    onClose
}) => {
    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={handleOutsideClick}>
            <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">Question Palette</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        ✕
                    </button>
                </div>
                <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2">
                    {questions.map((question, index) => (
                        <button
                            key={question.id}
                            onClick={() => {
                                onQuestionSelect(index);
                                onClose();
                            }}
                            className={`w-10 h-10 flex items-center justify-center text-sm font-bold ${currentQuestionIndex === index
                                    ? 'bg-blue-500 text-white'
                                    : attemptedQuestions.has(index)
                                        ? 'bg-green-500 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            {question.id}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QuestionPalette;
