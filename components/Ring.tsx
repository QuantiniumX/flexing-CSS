import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";

function Ring({
  variant,
  className,
}: {
  variant: "blue" | "red" | "green" | "white";
  className?: String;
}) {
  const ringVariant = cva(
    "absolute border-[5px] border-solid  rounded-[50%] w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] transform translate-x-[-50%] translate-y-[-50%]  drop-shadow-xl opacity-90 animate-pulse z-10",
    {
      variants: {
        variant: {
          blue: "border-[rgba(0,0,255,0.7)]",
          green: "border-[rgba(0,128,0,1.0)]",
          red: "border-[rgba(128,0,0,0.7)]",
          white: "border-[rgba(255,255,255,0.7)]",
        },
      },
    }
  );

  return (
    <div
      className={cn(ringVariant({ variant }), className)}
      style={{
        transform: "rotateX(45deg)",
        clipPath: "inset(50% 0 0 0)",
      }}
    ></div>
  );
}

export default Ring;
