import React from "react";
import Planet from "./Planet";
import Ring from "./Ring";

interface PreviewBoxProps {
  style: { [key: string]: string };
}

const PreviewBox: React.FC<PreviewBoxProps> = ({ style }) => {
  return (
    <>
      <div className="relative mx-auto h-[300px] w-[300px] rounded-xl  bg-cover lg:h-[500px] lg:w-[500px] xl:h-[550px] xl:w-[550px] bg-black bg-center">
        <div className="relative mx-auto h-full w-[98%] max-w-[1000px] lg:ml-0 lg:mr-auto">
          {/* {targetContainerHTML} */}
          {/* {objectContainerHTML} */}
        </div>
      </div>
    </>
  );
};

export default PreviewBox;
