'use client'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import React, { useState, useEffect } from "react";
import objectStyle from "@/public/objectStyle.json";
import { Button } from "./ui/button";

interface StyleObject {
    [key: string]: string;
}

interface Question {
    id: number;
    targetContainerHTML: string;
    objectContainerHTML: string;
    initialCSS: StyleObject;
    instruction: string;
    answer: string;
    points: string;
    difficulty: string;
}

const Main: React.FC = () => {
    const questions: Question[] = objectStyle;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [baseStyle, setBaseStyle] = useState<StyleObject>(questions[0].initialCSS);
    const [userStyle, setUserStyle] = useState<StyleObject>({});
    const [cssInput, setCssInput] = useState('');

    const handleStyleChange = (newStyle: StyleObject) => {
        setUserStyle(newStyle);
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCssInput(event.target.value);
    }

    const handleApply = () => {
        const cleanInput = cssInput.replace(/;$/, '');
        const [property, ...valueParts] = cleanInput.split(':').map(item => item.trim());
        const value = valueParts.join(':').trim();

        if (property && value) {
            handleStyleChange({ [property]: value });
            setCssInput('');
        } else {
            alert('Invalid CSS input. Please use format "property: value"');
        }
    }

    const combinedStyle = { ...baseStyle, ...userStyle };

    useEffect(() => {
    }, [combinedStyle]);

    const handlePageChange = (index: number) => {
        setCurrentQuestionIndex(index);
        setBaseStyle(questions[index].initialCSS);
        setUserStyle({});
        setCssInput('');
    }

    return (
        <div className="flex flex-col-reverse md:flex-row py-20 mx-2 md:mx-10">
            {/* Left Div */}
            <div className="relative flex-1 justify-center top-14">
                <div className="px-2 md:px-20">
                    <div className="flex items-center py-2">
                        <div className="flex-1 text-xl items-center font-bold ">
                            <span>Points: {questions[currentQuestionIndex].points}</span>
                        </div>
                        <div className="flex border-black items-center rounded font-xs border-2">
                            <Pagination>
                                <PaginationContent className="flex items-center space-x-2">
                                    <PaginationItem>
                                        <PaginationPrevious
                                            href="#"
                                            onClick={() => handlePageChange(Math.max(0, currentQuestionIndex - 1))}
                                            className="h-8 px-2 flex items-center justify-center text-sm"
                                        />
                                    </PaginationItem>
                                    <span className="text-sm">
                                        {currentQuestionIndex + 1} / {questions.length}
                                    </span>
                                    <PaginationItem>
                                        <PaginationNext
                                            href="#"
                                            onClick={() => handlePageChange(Math.min(questions.length - 1, currentQuestionIndex + 1))}
                                            className="h-8 px-2 flex items-center justify-center text-sm"
                                        />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>
                    </div>
                    <div>
                        <p className="flex justify-center pb-4 ">{JSON.parse(JSON.stringify(objectStyle[0].instruction))}</p>
                    </div>
                    <div className="flex flex-col">
                        <div className="bg-gray-200 py-2 px-5 rounded border-black border-2">
                            <pre>{'#container: {'}</pre>
                            <div className="css">
                                <div className="mx-10">
                                    {Object.entries(baseStyle).map(([property, value]) => (
                                        <div key={property}>{`${property}: ${value};`}</div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex w-full">
                                <label htmlFor="css-input" className="sr-only">Enter CSS</label>
                                <input
                                    id="css-input"
                                    type="text"
                                    value={cssInput}
                                    onChange={handleInputChange}
                                    placeholder="Enter CSS"
                                    className="px-2 mx-10 flex-1 w-full rounded border-black border-2 "
                                />
                            </div>
                            <pre>{'}'}</pre>
                        </div>
                        <div className="py-4 flex justify-center">
                            <Button variant="outline" onClick={handleApply} className="bg-slate-800 text-white w-20">Apply</Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Right Div */}
            <div className="flex flex-1 items-center justify-center md:mx-52">
                <div className="flex justify-center border w-full border-black aspect-square mb-8 md:mb-0" style={combinedStyle}>
                    hello
                </div>
            </div>
        </div>
    );
}

export default Main;
