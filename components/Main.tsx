"use client";
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
  const [baseStyle, setBaseStyle] = useState<StyleObject>(
    questions[0].initialCSS
  );
  const [userStyle, setUserStyle] = useState<StyleObject>({});

  const handleStyleChange = (newStyle: StyleObject) => {
    setUserStyle(newStyle);
  };

  const handlePageChange = (index: number) => {
    setCurrentQuestionIndex(index);
    setBaseStyle(questions[index].initialCSS);
    setUserStyle({});
  };

  const combinedStyle = { ...baseStyle, ...userStyle };
  const fetchHtml = () => {
    return "";
  };

  return (
    <div className="flex min-h-[100vh] select-none flex-col-reverse items-center justify-around py-10 lg:flex-row xl:py-0">
      {/* Question editor */}
      <div className="order-2 md:order-1 flex-1 justify-center mx-auto h-full w-[98%] max-w-[1000px] px-12 py-20 lg:ml-24 lg:mr-0">
        <div className="mx-auto flex min-w-full flex-col items-center justify-between gap-8 md:flex-row">
          <QuestionDisplay
            question={questions[currentQuestionIndex]}
            currentIndex={currentQuestionIndex}
            totalQuestions={questions.length}
            onPageChange={handlePageChange}
          />
        </div>

        <p className="flex justify-center mx-auto my-12 max-w-xl">
          {questions[currentQuestionIndex].instruction}
        </p>

        <CSSEditor baseStyle={baseStyle} onStyleChange={handleStyleChange} />
      </div>

      {/* Playground */}
      <div className="lg:mx-36 order-2 md:order-1 relative h-[300px] w-[300px] rounded-xl bg-cover lg:h-[500px] lg:w-[500px] xl:h-[550px] xl:w-[550px] border-black border bg-center bg-no-repeat">
        <PreviewBox html={fetchHtml} style={combinedStyle} />
      </div>
    </div>
  );
};

export default Main;
