import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
import React from "react";

function Planet({
  variant,
  className,
}: {
  variant: "blue" | "red" | "green" | "white";
  className?: string;
}) {
  const Planetvariants = cva(
    "h-[45px] w-[45px] lg:h-[60px] lg:w-[60px] rounded-[50%]",
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
      className={cn(Planetvariants({ variant }), className)}
      style={{ transformStyle: "preserve-3d" }}
    ></div>
  );
}

function Ring({
  type,
  variant,
  className,
}: {
  type?: "absolute" | "normal";
  variant: "blue" | "red" | "green" | "white";
  className?: string;
}) {
  const Ringvariant = cva(
    "border-[5px] border-solid rounded-full w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] transform translate-x-[-50%] translate-y-[-50%] drop-shadow-xl opacity-90 animate-pulse z-10 rotate-x-45 translate-z-50",
    {
      variants: {
        variant: {
          blue: "border-[rgba(0,0,255,0.7)]",
          green: "border-[rgba(0,128,0,1.0)]",
          red: "border-[rgba(128,0,0,0.7)]",
          white: "border-[rgba(255,255,255,0.7)]",
        },
        type: {
          absolute: "absolute",
          normal: "static",
        },
      },
      defaultVariants: {
        variant: "blue",
        type: "absolute",
      },
    },
  );

  return (
    <div
      className={cn(Ringvariant({ variant, type }), className)}
      style={{
        transformStyle: "preserve-3d", // adjust of remove if necessary
      }}
    ></div>
  );
}

interface questionstype {
  [key: string]: ({ inputStyle }: { inputStyle: string }) => React.ReactElement;
}

export const Questions: questionstype = {
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
          <Ring variant="blue" className="top-[9%] left-[43.5%]" />
          <Ring variant="green" className="top-[41%] left-[43.5%]" />
          <Ring variant="red" className="top-[73%] left-[43.5%]" />
        </div>
      </>
    );
  },
  easy_2: ({ inputStyle }: { inputStyle: string }) => {
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
        <div id="master" className="absolute inset-0 flex p-16">
          <Ring variant="blue" className="bottom-[12%] left-[12.5%]" />
          <Ring variant="green" className="bottom-[12%] left-[43%]" />
          <Ring variant="red" className="bottom-[12%] right-[12.5%]" />
        </div>
      </>
    );
  },
  easy_3: ({ inputStyle }: { inputStyle: string }) => {
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
        <div id="master" className="absolute inset-0 flex p-16 ">
          <Ring variant="red" className="bottom-[38%] right-[11.5%]" />
          <Ring variant="green" className="bottom-[26%] right-[11.5%]" />
          <Ring variant="blue" className="bottom-[14%] right-[11.5%]" />
        </div>
      </>
    );
  },
  easy_4: ({ inputStyle }: { inputStyle: string }) => {
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
        <div id="master" className="absolute inset-0 flex p-16">
          <Ring variant="red" className="top-[72.5%] left-[13%]" />
          <Ring variant="green" className="top-[72.5%] left-[43%]" />
          <Ring variant="blue" className="top-[72.5%] left-[74%]" />
        </div>
      </>
    );
  },
  easy_5: ({ inputStyle }: { inputStyle: string }) => {
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
        <div id="master" className="absolute inset-0 flex p-16">
          <Ring variant="blue" className="top-[50%] left-[12%]" />
          <Ring variant="green" className="top-[60.5%] left-[12%]" />
          <Ring variant="red" className="top-[72%] left-[12%]" />
        </div>
      </>
    );
  },
  easy_6: ({ inputStyle }: { inputStyle: string }) => {
    return (
      <>
        <div
          id="container"
          className="absolute inset-0 flex p-16"
          style={inputStyle ? JSON.parse(inputStyle) : {}}
        >
          <Planet variant="blue" />
        </div>
        <div id="master" className="absolute inset-0 flex p-16">
          <Ring variant="blue" className="top-[42%] left-[43%]" />
        </div>
      </>
    );
  },
  easy_7: ({ inputStyle }: { inputStyle: string }) => {
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
        <div id="master" className="absolute inset-0 flex p-16">
          <Ring variant="red" className="top-[11%] left-[13%]" />
          <Ring variant="green" className="top-[11%] left-[24.5%]" />
          <Ring variant="white" className="top-[11%] left-[36.5%]" />
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
          <Ring variant="red" className="top-[9%] left-[11.5%]" />
          <Ring variant="green" className="top-[41%] left-[11.5%]" />
          <Ring variant="blue" className="top-[75%] left-[11.5%]" />
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
        <div id="master" className="absolute inset-0 p-16 ">
          <Ring variant="blue" className="top-[30%] left-[75.6%]" />
          <Ring variant="green" className="top-[42%] left-[75.6%]" />
          <Ring variant="red" className="top-[54%] left-[75.6%]" />
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
          <Planet variant="white" />
          <Planet variant="red" />
        </div>
        <div id="master" className="absolute inset-0 flex p-16">
          <Ring variant="red" className="top-[11%] left-[12.5%]" />
          <Ring variant="white" className="top-[11%] left-[42%]" />
          <Ring variant="blue" className="top-[11%] left-[73.7%]" />
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
          <Planet variant="red" />
          <Planet variant="green" />
          <Planet variant="blue" />
        </div>
        <div id="master" className="absolute inset-0 flex p-16 ">
          <Ring variant="blue" className="top-[11%] right-[32%]" />
          <Ring variant="green" className="top-[11%] right-[42%]" />
          <Ring variant="red" className="top-[11%] right-[54%]" />
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
          <Planet variant="red" />
          <Planet variant="green" />
          <Planet variant="blue" />
        </div>
        <div id="master" className="absolute inset-0 flex p-16">
          <Ring variant="blue" className="top-[72%] left-[50%]" />
          <Ring variant="green" className="top-[72%] left-[61.5%]" />
          <Ring variant="red" className="top-[72%] left-[75%]" />
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
          <Planet variant="red" />
          <Planet variant="green" />
          <Planet variant="blue" />
        </div>
        <div id="master" className="absolute inset-0 flex p-16">
          <Ring variant="blue" className="top-[73%] right-[56%]" />
          <Ring variant="green" className="top-[73%] right-[42%]" />
          <Ring variant="red" className="top-[73%] right-[29.5%]" />
        </div>
      </>
    );
  },
  easy_14: ({ inputStyle }: { inputStyle: string }) => {
    return (
      <>
        <div
          id="container"
          className="absolute inset-0 flex p-16"
          style={inputStyle ? JSON.parse(inputStyle) : {}}
        >
          <Planet variant="red" />
        </div>
        <div id="master" className="absolute inset-0 flex p-16">
          <Ring variant="red" className="top-[10.9%] right-[12%]" />
        </div>
      </>
    );
  },
  easy_15: ({ inputStyle }: { inputStyle: string }) => {
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
        <div id="master" className="absolute inset-0 flex p-16">
          <Ring variant="green" className="top-[11%] right-[43.6%]" />
          <Ring variant="red" className="top-[11%] right-[12%]" />
          <Ring variant="blue" className="top-[11%] right-[73.5%]" />
        </div>
      </>
    );
  },
  easy_16: ({ inputStyle }: { inputStyle: string }) => {
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
        <div id="master" className="absolute inset-0 flex p-16">
          <Ring variant="green" className="top-[72%] right-[61%]" />
          <Ring variant="red" className="top-[72%] right-[49%]" />
          <Ring variant="blue" className="top-[72%] right-[73.5%]" />
        </div>
      </>
    );
  },
  easy_17: ({ inputStyle }: { inputStyle: string }) => {
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
        <div id="master" className="absolute inset-0 flex p-16">
          <Ring variant="green" className="top-[11%] right-[23.5%]" />
          <Ring variant="red" className="top-[11%] right-[37%]" />
          <Ring variant="blue" className="top-[11%] right-[10.8%]" />
        </div>
      </>
    );
  },
  medium_1: ({ inputStyle }: { inputStyle: string }) => {
    return (
      <>
        <div
          id="container"
          className="absolute inset-0 flex p-16"
          style={inputStyle ? JSON.parse(inputStyle) : {}}
        >
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="blue" />
          <Planet variant="blue" />
          <Planet variant="blue" />
          <Planet variant="blue" />
          <Planet variant="blue" />
          <Planet variant="blue" />
        </div>
        <div
          id="master"
          className="absolute inset-0 flex flex-col-reverse flex-wrap content-start p-16"
        >
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />

          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className=" lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
        </div>
      </>
    );
  },
  medium_2: ({ inputStyle }: { inputStyle: string }) => {
    return (
      <>
        <div
          id="container"
          className="absolute inset-0 flex p-16"
          style={inputStyle ? JSON.parse(inputStyle) : {}}
        >
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="blue" />
          <Planet variant="blue" />
          <Planet variant="blue" />
          <Planet variant="blue" />
          <Planet variant="blue" />
          <Planet variant="blue" />
        </div>
        <div
          id="master"
          className="absolute inset-0 flex flex-col-reverse flex-wrap content-between p-16"
        >
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
        </div>
      </>
    );
  },
  medium_3: ({ inputStyle }: { inputStyle: string }) => {
    return (
      <>
        <div
          id="container"
          className="absolute inset-0 grid p-16 h-full"
          style={inputStyle ? JSON.parse(inputStyle) : {}}
        >
          {/* Green Planets */}
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />

          {/* Red Planets */}
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="red" />

          {/* Blue Planets */}
          <Planet variant="blue" />
          <Planet variant="blue" />
          <Planet variant="blue" />
          <Planet variant="blue" />
          <Planet variant="blue" />
          <Planet variant="blue" />
        </div>

        <div
          id="master"
          className="absolute inset-0 p-16 grid grid-cols-4 content-start"
        >
          {/* Green Rings */}
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />

          {/* Red Rings */}
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />

          {/* Blue Rings */}
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
        </div>
      </>
    );
  },
  medium_4: ({ inputStyle }: { inputStyle: string }) => {
    return (
      <>
        <div
          id="container"
          className="grid p-16 h-full"
          style={inputStyle ? JSON.parse(inputStyle) : {}}
        >
          {/* Green Planets */}
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />

          {/* Red Planets */}
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="red" />

          {/* Blue Planets */}
          <Planet variant="blue" />
          <Planet variant="blue" />
          <Planet variant="blue" />
          <Planet variant="blue" />
          <Planet variant="blue" />
          <Planet variant="blue" />
        </div>

        <div id="master" className="absolute inset-0 p-16 grid grid-cols-6">
          {/* Green Rings */}
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />

          {/* Red Rings */}
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />

          {/* Blue Rings */}
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
        </div>
      </>
    );
  },
  medium_5: ({ inputStyle }: { inputStyle: string }) => {
    return (
      <>
        <div
          id="container"
          className="grid p-16 h-full"
          style={inputStyle ? JSON.parse(inputStyle) : {}}
        >
          {/* Green Planets */}
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />

          {/* Red Planets */}
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="red" />

          {/* Blue Planets */}
          <Planet variant="blue" />
          <Planet variant="blue" />
          <Planet variant="blue" />
          <Planet variant="blue" />
          <Planet variant="blue" />
          <Planet variant="blue" />
        </div>

        <div id="master" className="absolute inset-0 p-16 grid grid-cols-5">
          {/* Green Rings */}
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />

          {/* Red Rings */}
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />

          {/* Blue Rings */}
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
        </div>
      </>
    );
  },
  medium_6: ({ inputStyle }: { inputStyle: string }) => {
    return (
      <>
        <div
          id="container"
          className="flex p-16 h-full"
          style={inputStyle ? JSON.parse(inputStyle) : {}}
        >
          <Planet variant="blue" />
          <Planet variant="blue" />
          <Planet variant="blue" />
          <Planet variant="blue" />
          <Planet variant="blue" />
          <Planet variant="blue" />
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
        </div>

        <div
          id="master"
          className="absolute inset-0 p-16 flex  flex-wrap-reverse content-between"
        >
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
        </div>
      </>
    );
  },
  medium_7: ({ inputStyle }: { inputStyle: string }) => {
    return (
      <>
        <div
          id="container"
          className="flex p-16 h-full"
          style={inputStyle ? JSON.parse(inputStyle) : {}}
        >
          <Planet variant="blue" />
          <Planet variant="blue" />
          <Planet variant="blue" />
          <Planet variant="blue" />
          <Planet variant="blue" />
          <Planet variant="blue" />
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
        </div>

        <div
          id="master"
          className="absolute inset-0 p-16 flex flex-wrap-reverse"
        >
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
        </div>
      </>
    );
  },
  medium_8: ({ inputStyle }: { inputStyle: string }) => {
    return (
      <>
        <div
          id="container"
          className="flex p-16 h-full"
          style={inputStyle ? JSON.parse(inputStyle) : {}}
        >
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
        </div>

        <div
          id="master"
          className="absolute inset-0 p-16 flex flex-wrap content-end"
        >
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
        </div>
      </>
    );
  },
  medium_9: ({ inputStyle }: { inputStyle: string }) => {
    return (
      <>
        <div
          id="container"
          className="flex p-16 h-full"
          style={inputStyle ? JSON.parse(inputStyle) : {}}
        >
          <Planet variant="white" />
          <Planet variant="white" />
          <Planet variant="white" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="red" />
        </div>

        <div
          id="master"
          className="absolute inset-0 p-16 flex flex-wrap-reverse flex-col"
        >
          <Ring
            type="normal"
            variant="white"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="white"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="white"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
        </div>
      </>
    );
  },
  medium_10: ({ inputStyle }: { inputStyle: string }) => {
    return (
      <>
        <div
          id="container"
          className="flex p-16 h-full"
          style={inputStyle ? JSON.parse(inputStyle) : {}}
        >
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="blue" />
          <Planet variant="blue" />
          <Planet variant="blue" />
          <Planet variant="blue" />
          <Planet variant="blue" />
          <Planet variant="blue" />
        </div>

        <div
          id="master"
          className="absolute inset-0 p-16 flex flex-wrap flex-col"
        >
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />{" "}
        </div>
      </>
    );
  },
  medium_11: ({ inputStyle }: { inputStyle: string }) => {
    return (
      <>
        <div
          id="container"
          className="absolute inset-0 flex p-16  h-full"
          style={inputStyle ? JSON.parse(inputStyle) : {}}
        >
          <Planet variant="white" />
          <Planet variant="white" />
          <Planet variant="white" />
          <Planet variant="white" />
          <Planet variant="white" />
          <Planet variant="white" />
          <Planet variant="white" />
          <Planet variant="white" />
          <Planet variant="white" />
          <Planet variant="white" />
          <Planet variant="white" />
          <Planet variant="white" />
          <Planet variant="white" />
          <Planet variant="white" />
          <Planet variant="white" />
          <Planet variant="white" />
          <Planet variant="white" />
          <Planet variant="white" />
          <Planet variant="white" />
          <Planet variant="white" />
          <Planet variant="white" />
          <Planet variant="white" />
          <Planet variant="white" />
          <Planet variant="white" />
          <Planet variant="white" />
          <Planet variant="white" />
          <Planet variant="white" />
          <Planet variant="white" />
        </div>

        <div
          id="master"
          className="absolute inset-0 p-16 flex flex-wrap justify-center"
        >
          <Ring
            variant="white"
            type="normal"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            variant="white"
            type="normal"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            variant="white"
            type="normal"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            variant="white"
            type="normal"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            variant="white"
            type="normal"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            variant="white"
            type="normal"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            variant="white"
            type="normal"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            variant="white"
            type="normal"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            variant="white"
            type="normal"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            variant="white"
            type="normal"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            variant="white"
            type="normal"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            variant="white"
            type="normal"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            variant="white"
            type="normal"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            variant="white"
            type="normal"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            variant="white"
            type="normal"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            variant="white"
            type="normal"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            variant="white"
            type="normal"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            variant="white"
            type="normal"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            variant="white"
            type="normal"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            variant="white"
            type="normal"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            variant="white"
            type="normal"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            variant="white"
            type="normal"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            variant="white"
            type="normal"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            variant="white"
            type="normal"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            variant="white"
            type="normal"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            variant="white"
            type="normal"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            variant="white"
            type="normal"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            variant="white"
            type="normal"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
        </div>
      </>
    );
  },
  medium_12: ({ inputStyle }: { inputStyle: string }) => {
    return (
      <>
        <div
          id="container"
          className="flex p-16 h-full"
          style={inputStyle ? JSON.parse(inputStyle) : {}}
        >
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="white" />
          <Planet variant="white" />
          <Planet variant="blue" />
          <Planet variant="blue" />
          <Planet variant="blue" />
          <Planet variant="red" />
          <Planet variant="red" />
          <Planet variant="white" />
          <Planet variant="white" />
          <Planet variant="green" />
          <Planet variant="green" />
          <Planet variant="green" />
        </div>

        <div
          id="master"
          className="absolute inset-0 p-16 flex flex-wrap flex-col"
        >
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="white"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="white"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="blue"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="red"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="white"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="white"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
          <Ring
            type="normal"
            variant="green"
            className="lg:h-[60px] lg:w-[60px] w-[45px] h-[45px]"
          />
        </div>
      </>
    );
  },
};
