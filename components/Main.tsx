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

    const renderPaginationItems = () => {
        let items = [];
        const totalPages = questions.length;

        if (totalPages <= 3) {
            for (let i = 0; i < totalPages; i++) {
                items.push(
                    <PaginationItem key={i}>
                        <PaginationLink
                            href="#"
                            onClick={() => handlePageChange(i)}
                            isActive={currentQuestionIndex === i}
                        >
                            {i + 1}
                        </PaginationLink>
                    </PaginationItem>
                );
            }
        } else {
            items.push(
                <PaginationItem key={0}>
                    <PaginationLink
                        href="#"
                        onClick={() => handlePageChange(0)}
                        isActive={currentQuestionIndex === 0}
                    >
                        1
                    </PaginationLink>
                </PaginationItem>
            );

            if (currentQuestionIndex > 1) {
                items.push(
                    <PaginationItem key="ellipsis1">
                        <PaginationEllipsis />
                    </PaginationItem>
                );
            }

            for (let i = Math.max(1, currentQuestionIndex - 1); i <= Math.min(currentQuestionIndex + 1, totalPages - 2); i++) {
                items.push(
                    <PaginationItem key={i}>
                        <PaginationLink
                            href="#"
                            onClick={() => handlePageChange(i)}
                            isActive={currentQuestionIndex === i}
                        >
                            {i + 1}
                        </PaginationLink>
                    </PaginationItem>
                );
            }

            if (currentQuestionIndex < totalPages - 2) {
                items.push(
                    <PaginationItem key="ellipsis2">
                        <PaginationEllipsis />
                    </PaginationItem>
                );
            }

            items.push(
                <PaginationItem key={totalPages - 1}>
                    <PaginationLink
                        href="#"
                        onClick={() => handlePageChange(totalPages - 1)}
                        isActive={currentQuestionIndex === totalPages - 1}
                    >
                        {totalPages}
                    </PaginationLink>
                </PaginationItem>
            );
        }

        return items;
    };

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

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case "easy":
                return "text-green-500";
            case 'medium':
                return "text-yellow-500";
            case "hard":
                return "text-red-500";
            default:
                return '';
        }
    }

    return (
        <div className="flex flex-col md:flex-row py-20">
            {/* Left Div */}
            <div className="flex-1 justify-center">
                <div className="px-20">
                    <div className="flex-row justify-between items-center py-2">
                        <div>
                            <div className="gap-2 text-xl flex justify-around font-bold mb-5">
                                <span>Points: {questions[currentQuestionIndex].points}</span>
                                <span>Difficulty: <span className={getDifficultyColor(questions[currentQuestionIndex].difficulty)}>{questions[currentQuestionIndex].difficulty}</span></span>
                            </div>
                        </div>
                        <div className="border-black rounded font-xs flex justify-center w-auto border-2 px-2 mt-10 md:my-2">
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious
                                            href="#"
                                            onClick={() => handlePageChange(Math.max(0, currentQuestionIndex - 1))}
                                        />
                                    </PaginationItem>
                                    {renderPaginationItems()}
                                    <PaginationItem>
                                        <PaginationNext
                                            href="#"
                                            onClick={() => handlePageChange(Math.min(questions.length - 1, currentQuestionIndex + 1))}
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
            <div className="md:w-1/2 mt-8 md:mt-0 flex-1 px-10">
                <div className="justify-center p-4 border border-white" style={combinedStyle}>
                    <h2>Flexbox Game</h2>
                    <p>This text should change based on your CSS input.</p>
                </div>
            </div>
        </div>
    );
}

export default Main;
