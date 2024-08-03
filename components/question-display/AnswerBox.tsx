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
        "px-2 mx-10 min-w-fit no-scrollbar text-nowrap text-sm rounded border-black border-2 leading-8 resize-none"
      }
      style={{ minHeight: `${noOfAnswerLines * 32}px` }}
    />
  );
};

export default AnswerBox;
