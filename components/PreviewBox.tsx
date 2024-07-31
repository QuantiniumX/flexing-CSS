import React from "react";

interface PreviewBoxProps {
    style: { [key: string]: string };
}

const PreviewBox: React.FC<PreviewBoxProps> = ({ style }) => {
    return (
        <>
            <div className="relative mx-auto h-full w-[98%] max-w-[1000px] lg:ml-0 lg:mr-auto">
                <div className="flex h-full px-16 py-20 lg:p-24">
                    <div className="apple h-[40px] lg:h-[70px] lg:w-[70px]" style={style}>
                        <img src="https://labs.codehelp.in/fruitbox-flex/apple.webp" alt="apple" className="mx-auto h-[70%] w-[70%] animate-bounce drop-shadow-xl" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default PreviewBox;
