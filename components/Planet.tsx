import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
import { twj } from "tw-to-css";

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
      style={{
        transformStyle: "preserve-3d",
        ...twj(cn(planetVariants({ variant }), className)),
      }}
    ></div>
  );
}

export default Planet;
