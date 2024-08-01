import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";

function Planet({
  variant,
  className,
}: {
  variant: "blue" | "red" | "green";
  className?: String;
}) {
  const planetVariants = cva(
    "h-[45px] w-[45px] lg:h-[60px] lg:w-[60px] rounded-[50%] animate-bounce",
    {
      variants: {
        variant: {
          blue: "bg-[#0b3d91] shadow-blue",
          red: "bg-[#800000] shadow-red",
          green: "bg-[#008000] shadow-green",
        },
      },
    }
  );

  return (
    <div
      className={cn(planetVariants({ variant }), className)}
      style={{ transformStyle: "preserve-3d" }}
    ></div>
  );
}

export default Planet;
