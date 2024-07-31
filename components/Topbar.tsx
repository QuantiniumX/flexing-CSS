'use client'
import Link from "next/link";
import React, { useState } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import CountdownTimer from "./CountdownTimer";
import QuestionPalette from "@/components/QuestionPallete"

const Topbar = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [attemptedQuestions, setAttemptedQuestions] = useState<Set<number>>(new Set());
    const [showPalette, setShowPalette] = useState(false);
    const handleTimeUp = () => {
        alert("Time's up");
    }

    const totalQuestions = 10;

    const handleQuestionSelect = (index: number) => {
        setCurrentQuestionIndex(index);
    };

    const togglePalette = () => {
        setShowPalette(!showPalette);
    };

    return (
        <div className="bg-primary min-w-full bg-slate-50 py-2 px-5 flex items-center justify-between border-b border-black">
            <div className="items-center flex">
                <Link href="/" className="font-bold text-xl flex items-center">
                    Flexing CSS
                </Link>
            </div>

            <div className="flex flex-row items-center">
                <div>
                    <button
                        onClick={togglePalette}
                        className="mx-5 bg-black text-white px-3 py-1 rounded text-sm"
                    >
                        Show Questions
                    </button>

                    {showPalette && (
                        <QuestionPalette
                            totalQuestions={totalQuestions}
                            currentQuestionIndex={currentQuestionIndex}
                            attemptedQuestions={attemptedQuestions}
                            onQuestionSelect={handleQuestionSelect}
                            onClose={togglePalette}
                        />
                    )}
                </div>
                <div>
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
                                <Link href="/end-test">
                                    End-Test
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <div className="mx-4 px-2 py-1 border-black border-2 rounded ">
                    <CountdownTimer initialTime={300} onTimeUp={handleTimeUp} />
                </div>
            </div>
        </div>
    );
}

export default Topbar;
