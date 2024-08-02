"use client";
import React, { createContext, useState, useContext } from "react";
import questionsData from "@/public/objectStyle.json";
import { Question } from "@/lib/types";

type QuestionContextType = {
  questions: Question[];
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  attemptedQuestions: Set<number>;
  setAttemptedQuestions: React.Dispatch<React.SetStateAction<Set<number>>>;
};

const QuestionContext = createContext<QuestionContextType | undefined>(
  undefined,
);

export const QuestionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [attemptedQuestions, setAttemptedQuestions] = useState<Set<number>>(
    new Set(),
  );

  const value = {
    questions,
    setQuestions,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    attemptedQuestions,
    setAttemptedQuestions,
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
