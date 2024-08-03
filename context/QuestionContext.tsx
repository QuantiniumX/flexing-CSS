"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { Question } from "@/lib/types";

type QuestionContextType = {
  questions: Question[];
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  currentQuestion: Question;
};

const QuestionContext = createContext<QuestionContextType | undefined>(
  undefined,
);

export const QuestionProvider: React.FC<{
  children: React.ReactNode;
  questionsData: Question[];
}> = ({ children, questionsData }) => {
  const [questions, setQuestions] = useState<Question[]>(questionsData);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];

  const value = {
    questions,
    setQuestions,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    currentQuestion,
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
