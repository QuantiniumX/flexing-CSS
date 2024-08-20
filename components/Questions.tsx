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
  type,
  variant,
  className,
}: {
  type?: "absolute" | "normal";
  variant: "blue" | "red" | "green" | "white";
  className?: String;
}) {
  const ringVariant = cva(
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
      className={cn(ringVariant({ variant, type }), className)}
      style={{
        transformStyle: "preserve-3d", // Adjust or remove if unnecessary
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
        <div id="master" className="absolute flex justify-between flex-col-reverse items-center inset-0 p-16">
        <Ring variant="red" className="" type="normal" />
        <Ring variant="green" className="" type="normal" />
          <Ring variant="blue" className=""  type="normal" />
          
         
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
        <div id="master" className="absolute inset-0 flex items-end  justify-between flex-row-reverse  p-16">
          <Ring variant="red" className="" type="normal" />
          <Ring variant="green" className="" type="normal" />
          <Ring variant="blue" className="" type="normal" />
          
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
        <div id="master" className="absolute inset-0 flex  p-16  flex-col items-end justify-end">
          <Ring variant="red" className="" type="normal" />
          <Ring variant="green" className="" type="normal" />
          <Ring variant="blue" className="" type="normal" />
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
          <Planet variant="red" />
          <Planet variant="green" />
          <Planet variant="blue" />

        </div>
        <div id="master" className="absolute inset-0 flex p-16 flex-row-reverse items-end justify-between">
          <Ring variant="red" className="" type="normal" />
          <Ring variant="green" className="" type="normal" />
          <Ring variant="blue" className="" type="normal" />
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
        <div id="master" className="absolute inset-0 flex p-16 flex-col justify-end">
          <Ring variant="blue" className="" type="normal" />
          <Ring variant="green" className="" type="normal" />
          <Ring variant="red" className="" type="normal" />
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
        <div id="master" className="absolute inset-0 flex p-16 items-center justify-center">
          <Ring variant="blue" className="" type="normal" />
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
          <Planet variant="red" />
          <Planet variant="green" />
          <Planet variant="white" />
        </div>
        <div id="master" className="absolute inset-0 flex p-16 flex-row-reverse justify-start">
          <Ring variant="red" className="" type="normal"/>
          <Ring variant="green" className="" type="normal"/>
          <Ring variant="white" className="" type="normal"/>
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
          <Planet variant="red" />
          <Planet variant="green" />
          <Planet variant="blue"/>
        </div>
        <div id="master" className="absolute inset-0 p-16 flex flex-col-reverse justify-between">
          <Ring variant="red" className="" type="normal" />
          <Ring variant="green" className="" type="normal" />
          <Ring variant="blue" className="" type="normal" />
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
          <Planet variant="red"/>
        </div>
        <div id="master" className="absolute flex inset-0 p-16 flex-col justify-center items-end ">
          <Ring variant="blue" className="" type="normal" />
          <Ring variant="green" className="" type="normal" />
          <Ring variant="red" className="" type="normal" />
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
          <Planet variant="red" />
          <Planet variant="white" />
          <Planet variant="blue" />
        </div>
        <div id="master" className="absolute inset-0 flex p-16 flex-row-reverse justify-between">
          <Ring variant="red" className="" type="normal" />
          <Ring variant="white" className="" type="normal" />
          <Ring variant="blue" className="" type="normal" />
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
          <Planet variant="blue" />
          <Planet variant="green" />
          <Planet variant="red" />

        </div>
        <div id="master" className="absolute inset-0 flex p-16 justify-center ">
          <Ring variant="blue" className="" type="normal" />
          <Ring variant="green" className="" type="normal" />
          <Ring variant="red" className="" type="normal" />
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
        <div id="master" className="absolute inset-0 flex p-16 flex-row-reverse items-end">
          <Ring variant="blue" className=""  type="normal"/>
          <Ring variant="green" className=""  type="normal"/>
          <Ring variant="red" className="" type="normal" />
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
        <div id="master" className="absolute inset-0 flex p-16 justify-center flex-row-reverse items-end">
          <Ring variant="blue" className="" type="normal" />
          <Ring variant="green" className="" type="normal" />
          <Ring variant="red" className="to" type="normal" />
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
        <div id="master" className="absolute inset-0 flex p-16 justify-end">
          <Ring variant="red" className="" />
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
          <Planet variant="green" />

          <Planet variant="red" />

          <Planet variant="blue" />
        </div>
        <div id="master" className="absolute inset-0 flex p-16 justify-between">
          <Ring variant="green" className=""  type="normal"/>
          <Ring variant="red" className="" type="normal" />
          <Ring variant="blue" className=""  type="normal"/>
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
          <Planet variant="green" />
          <Planet variant="red" />
          <Planet variant="blue" />
        </div>
        <div id="master" className="absolute inset-0 flex p-16 items-end">
          <Ring variant="green" className="" type="normal" />
          <Ring variant="red" className="" type="normal" />
          <Ring variant="blue" className="to" type="normal" />
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
          <Planet variant="green" />
          <Planet variant="red" />
          <Planet variant="blue" />

        </div>
        <div id="master" className="absolute inset-0 flex p-16 flex-row-reverse">
          <Ring variant="green" className="" type="normal" />
          <Ring variant="red" className="" type="normal"/>
          <Ring variant="blue" className="" type="normal" />
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
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />

          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=" "
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
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
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
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
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />

          {/* Red Rings */}
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />

          {/* Blue Rings */}
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
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
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />

          {/* Red Rings */}
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />

          {/* Blue Rings */}
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
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
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />

          {/* Red Rings */}
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />

          {/* Blue Rings */}
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
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
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
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
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
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
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
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
            className=""
          />
          <Ring
            type="normal"
            variant="white"
            className=""
          />
          <Ring
            type="normal"
            variant="white"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
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
            className=""
          />
          <Ring
            variant="white"
            type="normal"
            className=""
          />
          <Ring
            variant="white"
            type="normal"
            className=""
          />
          <Ring
            variant="white"
            type="normal"
            className=""
          />
          <Ring
            variant="white"
            type="normal"
            className=""
          />
          <Ring
            variant="white"
            type="normal"
            className=""
          />
          <Ring
            variant="white"
            type="normal"
            className=""
          />
          <Ring
            variant="white"
            type="normal"
            className=""
          />
          <Ring
            variant="white"
            type="normal"
            className=""
          />
          <Ring
            variant="white"
            type="normal"
            className=""
          />
          <Ring
            variant="white"
            type="normal"
            className=""
          />
          <Ring
            variant="white"
            type="normal"
            className=""
          />
          <Ring
            variant="white"
            type="normal"
            className=""
          />
          <Ring
            variant="white"
            type="normal"
            className=""
          />
          <Ring
            variant="white"
            type="normal"
            className=""
          />
          <Ring
            variant="white"
            type="normal"
            className=""
          />
          <Ring
            variant="white"
            type="normal"
            className=""
          />
          <Ring
            variant="white"
            type="normal"
            className=""
          />
          <Ring
            variant="white"
            type="normal"
            className=""
          />
          <Ring
            variant="white"
            type="normal"
            className=""
          />
          <Ring
            variant="white"
            type="normal"
            className=""
          />
          <Ring
            variant="white"
            type="normal"
            className=""
          />
          <Ring
            variant="white"
            type="normal"
            className=""
          />
          <Ring
            variant="white"
            type="normal"
            className=""
          />
          <Ring
            variant="white"
            type="normal"
            className=""
          />
          <Ring
            variant="white"
            type="normal"
            className=""
          />
          <Ring
            variant="white"
            type="normal"
            className=""
          />
          <Ring
            variant="white"
            type="normal"
            className=""
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
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="white"
            className=""
          />
          <Ring
            type="normal"
            variant="white"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="blue"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="red"
            className=""
          />
          <Ring
            type="normal"
            variant="white"
            className=""
          />
          <Ring
            type="normal"
            variant="white"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
          <Ring
            type="normal"
            variant="green"
            className=""
          />
        </div>
      </>
    );
  },
};
