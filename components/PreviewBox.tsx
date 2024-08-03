import React from "react";
import Planet from "./Planet";
import Ring from "./Ring";
import { useQuestion } from "@/context/QuestionContext";
import { twj } from "tw-to-css";

const PreviewBox: React.FC = () => {
  const { currentQuestion } = useQuestion();

  console.log(currentQuestion.targetContainerHTML);

  const master = JSON.parse(currentQuestion.objectContainerHTML);

  return (
    <div className="relative mx-auto h-[300px] w-[300px] rounded-xl  bg-cover lg:h-[500px] lg:w-[500px] xl:h-[550px] xl:w-[550px] bg-black bg-center">
      <div className="relative mx-auto h-full w-[98%] max-w-[1000px] lg:ml-0 lg:mr-auto">
        <JSXConverter jsxString={currentQuestion.targetContainerHTML} />
        <JSXConverter jsxString={currentQuestion.objectContainerHTML} />
      </div>
    </div>
  );
};

function JSXConverter({ jsxString }: { jsxString: string }) {
  const data = JSON.parse(JSON.parse(jsxString));
  console.log(data);

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
