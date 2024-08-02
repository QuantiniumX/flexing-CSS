import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { useQuestion } from "@/context/QuestionContext";

const CSSEditor: React.FC = () => {
  const {
    questions,
    currentQuestionIndex,
    baseStyle,
    setBaseStyle,
    setUserStyle,
  } = useQuestion();
  const [cssInput, setCssInput] = useState("");

  useEffect(() => {
    setBaseStyle(questions[currentQuestionIndex].initialCSS);
    setUserStyle({});
  }, [currentQuestionIndex, questions, setBaseStyle, setUserStyle]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCssInput(event.target.value);
  };

  const handleApply = () => {
    const cleanInput = cssInput.replace(/;$/, "");
    const [property, ...valueParts] = cleanInput
      .split(":")
      .map((item) => item.trim());
    const value = valueParts.join(":").trim();

    if (property && value) {
      setUserStyle((prev) => ({ ...prev, [property]: value }));
      setCssInput("");
    } else {
      alert('Invalid CSS input. Please use format "property: value"');
    }
  };

  return (
    <>
      <div className="mx-auto mt-24 max-w-lg rounded bg-slate-400 px-8 py-5 shadow-2xl border-black border">
        <pre>{"#container: {"}</pre>
        <div className="css">
          <div className="mx-10 ">
            {Object.entries(baseStyle).map(([property, value]) => (
              <div key={property}>{`${property}: ${value};`}</div>
            ))}
          </div>
        </div>
        <div className="flex w-full">
          <label htmlFor="css-input" className="sr-only">
            Enter CSS
          </label>
          <input
            id="css-input"
            type="text"
            value={cssInput}
            onChange={handleInputChange}
            placeholder="Enter CSS"
            className="px-2 mx-10 flex-1 w-full rounded border-black border-2 "
          />
        </div>
        <pre>{"}"}</pre>
      </div>
      <Button
        variant="outline"
        onClick={handleApply}
        className="mx-auto bg-black text-white transition-colors mt-8 block rounded px-6 py-2"
      >
        Submit
      </Button>
    </>
  );
};

export default CSSEditor;
