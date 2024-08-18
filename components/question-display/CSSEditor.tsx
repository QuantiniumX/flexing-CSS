"use client";
import React, { useEffect, useState, } from "react";
import InitialCSS from "./InitialCSS";
import { Button } from "../ui/button";
import AnswerBox from "./AnswerBox";
import { useQuestion } from "@/context/QuestionContext";
import { useAttempted } from "@/context/AttemptedContext";
import { useInput } from "@/context/InputContext";
import toast from "react-hot-toast";

function convertCssStringToCamelCase(cssString: string) {
  const pairs = cssString.split(";").filter(Boolean);
  const camelCaseString = pairs
    .map((pair) => {
      const [property, value] = pair.split(":").map((s) => s.trim());
      const camelCasedProperty = property
        .split("-")
        .map((part, index) =>
          index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1),
        )
        .join("");
      return `${camelCasedProperty}: ${value}`;
    })
    .join("; ");

  return camelCaseString;
}

const CSSEditor: React.FC = () => {
  const { currentQuestion, currentQuestionIndex } = useQuestion();
  const { setAttemptedQuestions } = useAttempted();
  const { setInputStyle } = useInput();
  const [cssInput, setCssInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setCssInput("");
    setInputStyle("");
  }, [currentQuestionIndex, setInputStyle]);

  useEffect(() => {
    if (validateCSS(cssInput)) {
      const camelCaseString = convertCssStringToCamelCase(cssInput);
      const cssObject = parseCSS(camelCaseString);
      const cssString = JSON.stringify(cssObject);
      setInputStyle(cssString);
    }
    if (cssInput === "") setInputStyle("");
  }, [cssInput, setInputStyle]);

  const handleSubmit = () => {
    try {
      if (!validateCSS(cssInput)) {
        toast.error("Invalid CSS Format", {
          duration: 4000,
          position: "bottom-right",
        });
        return;
      }

      const cssObject = parseCSS(cssInput);
      const cssString = JSON.stringify(cssObject);
      sendPostRequest(cssString);
    } finally {
      setIsLoading(false);
    }
  };


  const validateCSS = (css: string) => {
    const cssPattern = /^(?:\s*[a-zA-Z-]+\s*:\s*[^;]+\s*;\s*)*$/;
    return cssPattern.test(css.trim());
  };

  const parseCSS = (css: string) => {
    return css.split(/;(?![^(]*\))/).reduce((acc: Record<string, string>, rule) => {
      const colonIndex = rule.indexOf(':');
      if (colonIndex > -1) {
        const property = rule.slice(0, colonIndex).trim();
        const value = rule.slice(colonIndex + 1).trim();
        if (property && value) {
          acc[property] = value.toLowerCase();
        }
      }
      return acc;
    }, {});
  };

  const sendPostRequest = (data: string) => {
    setIsLoading(true);
    if (!data || !currentQuestion?.answer) {
      toast.error("Invalid input or question data!");
      setIsLoading(false);
      return;
    }


    const normalizeCSS = (cssString: string) => {
      const parsed = JSON.parse(cssString);
      // Normalize values
      Object.keys(parsed).forEach(key => {
        parsed[key] = normalizeValue(key, parsed[key]);
      });
      // Sort the properties and their values
      return Object.entries(parsed)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([prop, value]) => `${prop}:${value}`)
        .join(';');
    };

    const normalizeValue = (property: string, value: string) => {
      const valueMap: Record<string, string> = {
        'end': 'flex-end',
        'start': 'flex-start',
        'between': 'space-between',
        'around': 'space-around',
        'evenly': 'space-evenly',
        // Add other mappings as needed
      };
      if (['align-items', 'justify-content', 'align-content', 'align-self'].includes(property)) {
        return valueMap[value] || value;
      }
      // For grid properties, remove all spaces to ensure consistent matching
      if (property.startsWith('grid-')) {
        return value.replace(/\s+/g, '');
      }
      return value;
    };
    const normalizedData = normalizeCSS(data);
    const normalizedAnswer = normalizeCSS(currentQuestion.answer);

    if (normalizedData === normalizedAnswer) {
      setAttemptedQuestions((prev) => [...prev, currentQuestion.id]);
      currentQuestion.completed = true;
      toast.success("Submitted successfully!!!");
      setCssInput("");
    } else {
      toast.error("Wrong Answer! Please try again!");
    }
    setIsLoading(false);
  };

  return (
    <>
      <div className="mx-auto mt-24 max-w-lg rounded-md bg-gray-200 px-8 py-5 shadow-lg">
        <pre>{"#container: {"}</pre>
        <div className="ml-6">
          <div className="css">
            <div className="">
              <InitialCSS />
            </div>
          </div>
          <div className="">
            <label htmlFor="css-input" className="sr-only">
              Enter CSS
            </label>
            <AnswerBox
              value={cssInput}
              onChange={(e) => setCssInput(e.target.value.toLowerCase())}
            />
          </div>
        </div>
        <pre>{"}"}</pre>
      </div>
      <Button
        variant="outline"
        className="mx-auto text-white mt-8 block cursor-pointer rounded-md px-6 py-2"
        disabled={isLoading}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </>
  );
};

export default CSSEditor;
