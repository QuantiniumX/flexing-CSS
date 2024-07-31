import React from "react";

interface PreviewBoxProps {
    style: { [key: string]: string };
}

const PreviewBox: React.FC<PreviewBoxProps> = ({ style }) => {
    return (
        <div className="flex flex-1 items-center justify-center md:mx-52">
            <div className="flex justify-center border w-full border-black aspect-square mb-8 md:mb-0" style={style}>
                hello
            </div>
        </div>
    );
}

export default PreviewBox;
