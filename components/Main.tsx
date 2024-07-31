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
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="order-2 md:order-1 flex-1 justify-center mx-auto h-full w-[98%] max-w-[1000px] px-12 py-20 lg:ml-auto lg:mr-0">

                <div className="mx-auto flex max-w-full flex-col items-center justify-between md:flex-row">
                    <QuestionDisplay
                        question={questions[currentQuestionIndex]}
                        currentIndex={currentQuestionIndex}
                        totalQuestions={questions.length}
                        onPageChange={handlePageChange}
                    />
                </div>

                <p className="flex justify-center mx-auto my-12 max-w-xl ">{questions[currentQuestionIndex].instruction}</p>

                <CSSEditor
                    baseStyle={baseStyle}
                    onStyleChange={handleStyleChange}
                />
            </div>
            <div className="order-1 md:order-2">
                <PreviewBox style={combinedStyle} />
            </div>
        </div>
    );
}

export default Main;
