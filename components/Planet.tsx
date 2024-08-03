import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
import { tailwindToCSS } from "tw-to-css";

function Planet({
  variant,
  className,
}: {
  variant: "blue" | "red" | "green" | "white";
  className?: String;
}) {
  const { twj } = tailwindToCSS({
    config: {
      theme: {
        extend: {
          colors: {
            boxShadow: {
              blue: "0 0 30px rgba(0, 0, 255, 0.7)",
              red: "0 0 30px rgba(128, 0, 0, 0.7)",
              green: "0 0 30px rgba(0, 128, 0, 0.7)",
              white: "0 0 30px rgba(255,255,255,0.7)",
            },
          },
        },
      },
    },
  });
  const planetVariants = cva(
    "h-[45px] w-[45px] lg:h-[60px] lg:w-[60px] rounded-[50%] animate-bounce",
    {
      variants: {
        variant: {
          blue: "bg-[#0b3d91] shadow-blue",
          red: "bg-[#800000] shadow-red",
          green: "bg-[#008000] shadow-green",
          white: "bg-white shadow-white",
        },
      },
    },
  );

  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        ...twj(cn(planetVariants({ variant }), className)),
      }}
    ></div>
  );
}

export default Planet;
