import React from "react";

interface AnswerBoxProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const AnswerBox: React.FC<AnswerBoxProps> = ({ value, onChange }) => {
  const noOfAnswerLines = 2;
  return (
    <textarea
      id="css-input"
      value={value}
      onChange={onChange}
      placeholder="Enter CSS"
      className={
        "mt-2 w-full resize-none rounded-md p-2 no-scrollbar text-nowrap text-sm border-black border-2"
      }
      style={{ minHeight: `${noOfAnswerLines * 32}px` }}
    />
  );
};

export default AnswerBox;
