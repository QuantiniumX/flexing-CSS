import React, { useEffect, useState } from "react";
import InitialCSS from "./InitialCSS";
import { Button } from "../ui/button";
import AnswerBox from "./AnswerBox";
import { useQuestion } from "@/context/QuestionContext";
import { useAttempted } from "@/context/AttemptedContext";
import { useToast } from "@/components/ui/use-toast";

const CSSEditor: React.FC = () => {
  const { currentQuestion, currentQuestionIndex } = useQuestion();
  const { setAttemptedQuestions } = useAttempted();
  const [cssInput, setCssInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setCssInput;
  }, [currentQuestionIndex]);

  const handleSubmit = () => {
    const isValid = validateCSS(cssInput);
    if (!isValid) {
      toast({
        variant: "destructive",
        title: "Invalid CSS Format",
      });
      return;
    }
    const cssObject = parseCSS(cssInput);
    const cssString = JSON.stringify(cssObject);
    sendPostRequest(cssString);
  };

  const validateCSS = (css: string) => {
    const cssPattern = /^(?:\s*[a-zA-Z-]+\s*:\s*[^;]+\s*;\s*)*$/;
    return cssPattern.test(css.trim().replace(/\s+/g, " "));
  };

  const parseCSS = (css: string) => {
    return css.split(";").reduce((acc: Record<string, string>, rule) => {
      const [property, value] = rule
        .split(":")
        .map((item) => item.trim().replace(/\s+/g, " "));
      if (property && value) {
        acc[property] = value;
      }
      return acc;
    }, {});
  };

  const sendPostRequest = async (data: string) => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/v1/submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: "66acd4c06c7faa3f82ed321d",
          questionId: currentQuestion._id,
          answer: data,
        }),
      });
      const responseData = await response.json();
      if (response.ok) {
        if (responseData.isCorrect) {
          setAttemptedQuestions((prev) => [...prev, currentQuestion._id]);
          toast({ title: "Submitted successfully!!!" });
          setCssInput("");
        } else {
          toast({
            title: "Wrong Answer! Please try again!",
            variant: "destructive",
          });
        }
      } else {
        toast({
          variant: "destructive",
          title: "Failed to submit CSS",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "An error occurred while submitting CSS",
      });
    } finally {
      setIsLoading(false);
    }
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
