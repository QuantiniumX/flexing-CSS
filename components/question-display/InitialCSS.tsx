"use client";

import { useQuestion } from "@/context/QuestionContext";

export default function InitialCSS() {
  const { currentQuestion } = useQuestion();

  return (
    <>
      {/* /*{ {Object.entries(JSON.parse(currentQuestion?.initialCSS)).map(
        ([property, value]) => (
          <div
            key={property}
            className="leading-8"
          >{`${property}: ${value};`}</div>
        ),
      )} */} 
    </>
  );
}
