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
import objectStyle from "../public/objectStyle.json";
import { Button } from "./ui/button";

interface StyleObject {
    [key: string]: string;
}

const Main: React.FC = () => {
    const initialStyle = objectStyle[0].initialCSS;
    const [baseStyle, setBaseStyle] = useState(initialStyle);
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

    return (
        <div className="flex flex-col md:flex-row py-20">
            {/* Left Div */}
            <div className="flex-1 justify-center">
                <div className="px-20">
                    <div className="flex flex-col justify-between items-center md:flex-row md:py-10">
                        <h1 className="text-2xl font-bold ">
                            <span className="text-green-500">Flexing </span>
                            <span className="underline">CSS</span>
                        </h1>
                        <div className="border-black border-2 px-2 md:my-2">
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious href="#" />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationEllipsis />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationNext href="#" />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>
                    </div>
                    <div>
                        <p className=" flex justify-center py-8">{JSON.parse(JSON.stringify(objectStyle[0].instruction))}</p>
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
                                    className="mx-10 flex-1 w-full border-black border-2 "
                                />
                            </div>
                            <pre>{'}'}</pre>
                        </div>
                        <div className=" py-4 flex justify-center">
                            <Button variant="outline" onClick={handleApply} className="bg-slate-800 text-white w-20">Apply</Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Right Div */}
            <div className="md:w-1/2 mt-8 md:mt-0 flex-1 px-10">
                <div className=" justify-center p-4 border border-white" style={combinedStyle}>
                    <h2>Flexbox Game</h2>
                    <p>This text should change based on your CSS input.</p>
                </div>
            </div>
        </div >
    );
}

export default Main;
