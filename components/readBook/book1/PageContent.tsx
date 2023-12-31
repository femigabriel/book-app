import React from "react";
import Image from "next/image";

interface Props {
  content?: string;
  pageNumber: number;
}

export const PageContent = (props: Props) => {
  return (
    <div>
      <div className="w-full px-5 mb-5 lg:px-10 py-7 text-md flex items-center justify-center leading-8 bg-[#e1d1f]">
        <div className="text-center text-[0.90em] px-10 lg:px-0">
          <p>{props.content}</p>
        </div>
      </div>
      <div className="flex lg:items-end float-right my-5 lg:mt-10 mx-5">
        <span></span>
        <p className="text-[0.65em]">{props.pageNumber}</p>
      </div>
    </div>
  );
};
