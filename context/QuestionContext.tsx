"use client";
import React, { createContext, useState, useContext } from "react";
import questionsData from "@/public/objectStyle.json";

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

interface QuestionContextType {
  questions: Question[];
  currentQuestionIndex: number;
  setCurrentQuestionIndex: (index: number) => void;
  attemptedQuestions: Set<number>;
  setAttemptedQuestions: React.Dispatch<React.SetStateAction<Set<number>>>;
  baseStyle: StyleObject;
  setBaseStyle: React.Dispatch<React.SetStateAction<StyleObject>>;
  userStyle: StyleObject;
  setUserStyle: React.Dispatch<React.SetStateAction<StyleObject>>;
}

const QuestionContext = createContext<QuestionContextType | undefined>(
  undefined,
);

export const QuestionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [attemptedQuestions, setAttemptedQuestions] = useState<Set<number>>(
    new Set(),
  );
  const [baseStyle, setBaseStyle] = useState<StyleObject>(
    questionsData[0].initialCSS,
  );
  const [userStyle, setUserStyle] = useState<StyleObject>({});

  const value = {
    questions: questionsData,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    attemptedQuestions,
    setAttemptedQuestions,
    baseStyle,
    setBaseStyle,
    userStyle,
    setUserStyle,
  };

  return (
    <QuestionContext.Provider value={value}>
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestion = () => {
  const context = useContext(QuestionContext);
  if (context === undefined) {
    throw new Error("useQuestion must be used within a QuestionProvider");
  }
  return context;
};
