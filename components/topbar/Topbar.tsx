"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CountdownTimer from "./CountdownTimer";
import QuestionPalette from "@/components/topbar/QuestionPallete";
import { useToast } from "../ui/use-toast";

const Topbar = ({ time }: { time: number }) => {
  const [showPalette, setShowPalette] = useState(false);
  const { toast } = useToast();

  const handleTimeUp = () => {
    toast({
      title: "Time's Up"
    })
  };

  const togglePalette = () => {
    setShowPalette(!showPalette);
  };

  return (
    <div className="bg-primary min-w-full bg-slate-50 py-2 px-5 flex items-center justify-between border-b border-black">
      {/* Just hide the name flexing css if the display is small. Can't seem to fit all stuff if display is small*/}
      <div className="hidden md:block font-semibold text-lg items-center sm:flex">
        Flexing CSS
      </div>

      <div className="flex justify-center">
        <div className="flex flex-row items-center">
          <div>
            <button
              onClick={togglePalette}
              className="mr-4 bg-black text-white px-3 py-1 rounded text-sm"
            >
              Show Questions
            </button>
            {showPalette && <QuestionPalette onClose={togglePalette} />}
          </div>
          <div className="mx-2">
            <DropdownMenu>
              <DropdownMenuTrigger className="focus:outline-none">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-50 shadow-lg">
                <DropdownMenuLabel>Username</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <p className="text-red-800 font-bold">End Test</p>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="ml-4 px-2 py-1 border-black border-2 rounded ">
            <CountdownTimer initialTime={time} onTimeUp={handleTimeUp} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
