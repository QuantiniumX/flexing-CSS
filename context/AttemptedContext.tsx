"use client";
import React, { createContext, ReactNode, useContext, useState, useEffect } from "react";

type AttemptedContextType = {
  attemptedQuestions: string[];
  setAttemptedQuestions: React.Dispatch<React.SetStateAction<string[]>>;
};

const AttemptedContext = createContext<AttemptedContextType | null>(null);

export function AttemptedProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [attemptedQuestions, setAttemptedQuestions] = useState<string[]>([]);

  useEffect(() => {
    const storedQuestions = localStorage.getItem('attemptedQuestions');
    if (storedQuestions) {
      const parsedQuestions = JSON.parse(storedQuestions);
      setAttemptedQuestions(parsedQuestions);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('attemptedQuestions', JSON.stringify(attemptedQuestions));
  }, [attemptedQuestions]);

  const value = {
    attemptedQuestions,
    setAttemptedQuestions,
  };

  return (
    <AttemptedContext.Provider value={value}>
      {children}
    </AttemptedContext.Provider>
  );
}

export const useAttempted = () => {
  const context = useContext(AttemptedContext);
  if (context === null) {
    throw new Error("useAttempted must be used within a AttemptedProvider");
  }
  return context;
};

