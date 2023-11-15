import React from "react";

interface Props {
  content?: any;
  illustrator?: any;
}
export const Page1 = (props: Props) => {
  return (
    <div className="flex cursor-pointer h-full lg:h-screen w-full ">
      <div className="bg-[#E1D1F6 coverBook w-full   flex justify-center items-center">
        <div className="h-full w-full bg-[#E1D1F6] px-5 lg:px-20 lg:py-5">{props.illustrator}</div>
      </div>
      <div className="w-full h-full px-5 lg:px-20 py-7 flex items-center justify-center leading-9 bg-[#e1d1f]">
        <p>{props.content}</p>
      </div>
    </div>
  );
};