import React, { useState } from "react";
import { Button } from "./ui/button";

interface CSSEditorProps {
    baseStyle: { [key: string]: string };
    onStyleChange: (newStyle: { [key: string]: string }) => void;
}

const CSSEditor: React.FC<CSSEditorProps> = ({ baseStyle, onStyleChange }) => {
    const [cssInput, setCssInput] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCssInput(event.target.value);
    }

    const handleApply = () => {
        const cleanInput = cssInput.replace(/;$/, '');
        const [property, ...valueParts] = cleanInput.split(':').map(item => item.trim());
        const value = valueParts.join(':').trim();

        if (property && value) {
            onStyleChange({ [property]: value });
            setCssInput('');
        } else {
            alert('Invalid CSS input. Please use format "property: value"');
        }
    }

    return (
        <div className="flex flex-col">
            <div className="bg-gray-200 p-16 min-h-32 py-2 rounded border-black border-2">
                <pre>{'#container: {'}</pre>
                <div className="css">
                    <div className="mx-10 ">
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
    );
}

export default CSSEditor;
