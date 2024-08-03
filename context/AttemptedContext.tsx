"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";

type AttemptedContextType = {
  attemptedQuestions: string[];
  setAttemptedQuestions: React.Dispatch<React.SetStateAction<string[]>>;
};

const AttemptedContext = createContext<AttemptedContextType | null>(null);

export function AttemptedProvider({
  children,
  attemptedQuestionsData,
}: {
  children: ReactNode;
  attemptedQuestionsData: string[];
}) {
  const [attemptedQuestions, setAttemptedQuestions] = useState<string[]>(
    attemptedQuestionsData,
  );
  return (
    <AttemptedContext.Provider
      value={{ attemptedQuestions, setAttemptedQuestions }}
    >
      {children}
    </AttemptedContext.Provider>
  );
}

export const useAttempted = () => {
  const context = useContext(AttemptedContext);
  if (context === undefined) {
    throw new Error("useAttempted must be used within a AttemptedProvider");
  }
  return context;
};
