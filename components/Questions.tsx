import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
import React from "react";

function Planet({
  variant,
  className,
}: {
  variant: "blue" | "red" | "green" | "white";
  className?: String;
}) {
  const planetVariants = cva(
    "h-[45px] w-[45px] lg:h-[60px] lg:w-[60px] rounded-[50%] animate-bounce",
    {
      variants: {
        variant: {
          blue: "bg-[#0b3d91] shadow-[0_0_30px_rgba(0,0,255,0.7)]",
          red: "bg-[#800000] shadow-[0_0_30px_rgba(128,0,0,0.7)]",
          green: "bg-[#008000] shadow-[0_0_30px_rgba(0,128,0,0.7)]",
          white: "bg-white shadow-[0_0_30px_rgba(255,255,255,0.7)]",
        },
      },
    },
  );

  return (
    <div
      className={cn(planetVariants({ variant }), className)}
      style={{ transformStyle: "preserve-3d" }}
    ></div>
  );
}

function Ring({
  variant,
  className,
}: {
  variant: "blue" | "red" | "green" | "white";
  className?: String;
}) {
  const ringVariant = cva(
    "absolute border-[5px] border-solid rounded-full w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] transform translate-x-[-50%] translate-y-[-50%] drop-shadow-xl opacity-90 animate-pulse z-10 rotate-x-45 translate-z-50",
    {
      variants: {
        variant: {
          blue: "border-[rgba(0,0,255,0.7)]",
          green: "border-[rgba(0,128,0,1.0)]",
          red: "border-[rgba(128,0,0,0.7)]",
          white: "border-[rgba(255,255,255,0.7)]",
        },
      },
      defaultVariants: {
        variant: "blue",
      },
    },
  );

  return (
    <div
      className={cn(ringVariant({ variant }), className)}
      style={{
        transformStyle: "preserve-3d", // Adjust or remove if unnecessary
      }}
    ></div>
  );
}

interface QuestionsType {
  [key: string]: ({ inputStyle }: { inputStyle: string }) => React.ReactElement;
}

export const Questions: QuestionsType = {
  easy_1: ({ inputStyle }: { inputStyle: string }) => {
    return (
      <>
        <div
          id="container"
          className="flex h-full p-16"
          style={inputStyle ? JSON.parse(inputStyle) : {}}
        >
          <Planet variant="red" />
          <Planet variant="green" />
          <Planet variant="blue" />
        </div>
        <div id="master" className="absolute inset-0 p-16">
          <Ring variant="blue" className="top-[8%] left-[43.5%]" />
          <Ring variant="green" className="top-[41%] left-[43.5%]" />
          <Ring variant="red" className="top-[74%] left-[43.5%]" />
        </div>
      </>
    );
  },
  easy_8: ({ inputStyle }: { inputStyle: string }) => {
    return (
      <>
        <div
          id="container"
          className="absolute inset-0 flex p-16"
          style={inputStyle ? JSON.parse(inputStyle) : {}}
        >
          <Planet variant="blue" />
          <Planet variant="green" />
          <Planet variant="red" />
        </div>
        <div id="master" className="absolute inset-0 p-16">
          <Ring variant="red" className="top-[74%] left-[11%]" />
          <Ring variant="green" className="top-[74%] left-[43.8%]" />
          <Ring variant="blue" className="top-[74%] left-[76.4%]" />
        </div>
      </>
    );
  },
  easy_9: ({ inputStyle }: { inputStyle: string }) => {
    return (
      <>
        <div
          id="container"
          className="absolute inset-0 flex p-16"
          style={inputStyle ? JSON.parse(inputStyle) : {}}
        >
          <Planet variant="blue" />
          <Planet variant="green" />
          <Planet variant="red" />
        </div>
        <div id="master" className="absolute inset-0 p-16">
          <Ring variant="blue" className="top-[51.5%] left-[11%]" />
          <Ring variant="green" className="top-[63.5%] left-[11%]" />
          <Ring variant="red" className="top-[75.5%] left-[11%]" />
        </div>
      </>
    );
  },
  easy_10: ({ inputStyle }: { inputStyle: string }) => {
    return (
      <>
        <div
          id="container"
          className="absolute inset-0 flex p-16"
          style={inputStyle ? JSON.parse(inputStyle) : {}}
        >
          <Planet variant="blue" />
        </div>
        <div id="master" className="absolute inset-0 p-16">
          <Ring variant="blue" className="top-[41.5%] left-[43.5%]" />
        </div>
      </>
    );
  },
  easy_11: ({ inputStyle }: { inputStyle: string }) => {
    return (
      <>
        <div
          id="container"
          className="absolute inset-0 flex p-16"
          style={inputStyle ? JSON.parse(inputStyle) : {}}
        >
          <Planet variant="white" />
          <Planet variant="green" />
          <Planet variant="red" />
        </div>
        <div id="master" className="absolute inset-0 p-16">
          <Ring variant="red" className="top-[8.3%] left-[11%]" />
          <Ring variant="green" className="top-[8.3%] left-[24%]" />
          <Ring variant="white" className="top-[8.3%] left-[37%]" />
        </div>
      </>
    );
  },
  easy_12: ({ inputStyle }: { inputStyle: string }) => {
    return (
      <>
        <div
          id="container"
          className="absolute inset-0 flex p-16"
          style={inputStyle ? JSON.parse(inputStyle) : {}}
        >
          <Planet variant="blue" />
          <Planet variant="green" />
          <Planet variant="red" />
        </div>
        <div id="master" className="absolute inset-0 p-16">
          <Ring variant="red" className="top-[9%] left-[11.5%]" />
          <Ring variant="green" className="top-[41%] left-[11.5%]" />
          <Ring variant="blue" className="top-[75%] left-[11.5%]" />
        </div>
      </>
    );
  },
  easy_13: ({ inputStyle }: { inputStyle: string }) => {
    return (
      <>
        <div
          id="container"
          className="absolute inset-0 flex p-16"
          style={inputStyle ? JSON.parse(inputStyle) : {}}
        >
          <Planet variant="blue" />
          <Planet variant="green" />
          <Planet variant="red" />
        </div>
        <div id="master" className="absolute inset-0 p-16 ">
          <Ring variant="blue" className="top-[30%] left-[75.6%]" />
          <Ring variant="green" className="top-[42%] left-[75.6%]" />
          <Ring variant="red" className="top-[54%] left-[75.6%]" />
        </div>
      </>
    );
  },
};
