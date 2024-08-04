"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";

type AttemptedContextType = {
  inputStyle: string;
  setInputStyle: React.Dispatch<React.SetStateAction<string>>;
};

const InputContext = createContext<AttemptedContextType | null>(null);

export function InputProvider({ children }: { children: ReactNode }) {
  const [inputStyle, setInputStyle] = useState<string>("");

  const value = {
    inputStyle,
    setInputStyle,
  };

  return (
    <InputContext.Provider value={value}>{children}</InputContext.Provider>
  );
}

export const useInput = () => {
  const context = useContext(InputContext);
  if (context === null) {
    throw new Error("useAttempted must be used within a AttemptedProvider");
  }
  return context;
};
