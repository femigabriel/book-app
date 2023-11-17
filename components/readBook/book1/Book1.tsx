import React, { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import ReactCardFlip from "react-card-flip";

interface Props {
  content?: any;
  illustrator?: any;
}

export const Page1 = (props: Props) => {
  
  return (
    <div className="lg:flex shadow-md  cursor-pointer my-5 h-full lg:h-[457px] w-full cover">
      <div className="bg-[#E1D1F6 coverBook w-full   flex justify-center items-center">
        <div className="h-full  w-full bg-[#E1D1F6] px-5 lg:px-20 lg:py-5">
          {props.illustrator}
        </div>
      </div>
      <div className="w-full px-5 mb-5 lg:px-20 py-7 text-md flex items-center justify-center leading-9 bg-[#e1d1f]">
        <p>{props.content}</p>
      </div>
    </div>
        //   <HTMLFlipBook width={300} height={500}>
        //   <div> {props.illustrator}</div>
        //   <p>{props.content}</p>
        // </HTMLFlipBook>
  );
};
