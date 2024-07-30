import React from 'react';

interface QuestionPaletteProps {
    totalQuestions: number;
    currentQuestionIndex: number;
    attemptedQuestions: Set<number>;
    onQuestionSelect: (index: number) => void;
    onClose: () => void;
}

const QuestionPalette: React.FC<QuestionPaletteProps> = ({
    totalQuestions,
    currentQuestionIndex,
    attemptedQuestions,
    onQuestionSelect,
    onClose
}) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 w-96 max-w-full">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">Question Palette</h3>
                    <button 
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        ✕
                    </button>
                </div>
                <div className="grid grid-cols-5 gap-2">
                    {Array.from({ length: totalQuestions }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                onQuestionSelect(index);
                                onClose();
                            }}
                            className={`w-10 h-10 rounded ${
                                currentQuestionIndex === index
                                    ? 'bg-blue-500 text-white'
                                    : attemptedQuestions.has(index)
                                    ? 'bg-green-500 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
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
