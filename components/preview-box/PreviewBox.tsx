"use client";

import React from "react";
import Planet from "./Planet";
import Ring from "./Ring";
import { useQuestion } from "@/context/QuestionContext";
import { twj } from "tw-to-css";

const PreviewBox: React.FC = () => {
  const { currentQuestion } = useQuestion();
  const master = JSON.parse(currentQuestion.objectContainerHTML);

  return (
    <div className="relative bg-black rounded-xl mx-auto h-full w-[98%] max-w-[1000px] lg:ml-0 lg:mr-auto">
      <JSXConverter jsxString={currentQuestion.targetContainerHTML} />
      <JSXConverter jsxString={currentQuestion.objectContainerHTML} />
    </div>
  );
};

function JSXConverter({ jsxString }: { jsxString: string }) {
  const data = JSON.parse(JSON.parse(jsxString));
  return (
    <div id={data.props.id} style={twj(data.props.className)}>
      {data.props.children.map((child: any, index: React.Key) => {
        return data.props.id === "container" ? (
          <Planet
            variant={child.props.variant}
            key={index}
            className={child.props.className}
          />
        ) : (
          <Ring
            variant={child.props.variant}
            key={index}
            className={child.props.className}
          />
        );
      })}
    </div>
  );
}

export default PreviewBox;
