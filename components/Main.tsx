'use client'
import React, { useState } from "react";
import objectStyle from "@/public/objectStyle.json";
import QuestionDisplay from "./QuestionDisplay";
import CSSEditor from "./CSSEditor";
import PreviewBox from "./PreviewBox";

interface StyleObject {
    [key: string]: string;
}

interface Question {
    id: number;
    targetContainerHTML: string;
    objectContainerHTML: string;
    initialCSS: StyleObject;
    instruction: string;
    answer: string;
    points: string;
    difficulty: string;
}

const Main: React.FC = () => {
    const questions: Question[] = objectStyle;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [baseStyle, setBaseStyle] = useState<StyleObject>(questions[0].initialCSS);
    const [userStyle, setUserStyle] = useState<StyleObject>({});

    const handleStyleChange = (newStyle: StyleObject) => {
        setUserStyle(newStyle);
    }

    const handlePageChange = (index: number) => {
        setCurrentQuestionIndex(index);
        setBaseStyle(questions[index].initialCSS);
        setUserStyle({});
    }

    const combinedStyle = { ...baseStyle, ...userStyle };

    return (
        <div className="flex flex-col-reverse md:flex-row py-20 mx-2 md:mx-10">
            <div className="relative flex-1 justify-center top-14">
                <div className="px-2 md:px-20">
                    <QuestionDisplay
                        question={questions[currentQuestionIndex]}
                        currentIndex={currentQuestionIndex}
                        totalQuestions={questions.length}
                        onPageChange={handlePageChange}
                    />
                    <CSSEditor
                        baseStyle={baseStyle}
                        onStyleChange={handleStyleChange}
                    />
                </div>
            </div>
            <PreviewBox style={combinedStyle} />
        </div>
    );
}

export default Main;
