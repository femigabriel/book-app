import React from "react";
import { ReadBookHeader } from "./ReadBookHeader";
import Image from "next/image";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}
export const BookPageFlipped = ({ onNextClick, onBackClick }: Props) => {
  return (
    <div className="coverBook  w-full h-screen">
      <ReadBookHeader />
      <div className="flex justify-between items-center cover px-5 ">
      
        <LeftOutlined onClick={onBackClick} className="w cursor-pointer" />
        <div>
          <Image
            width={17}
            height={19}
            src="./assets/images/bookFlip.svg"
            className="w-full px-10 h-[538.355px] cursor-pointer book"
            alt="cover"
          />
        </div>
       
        <RightOutlined onClick={onNextClick} className="w cursor-pointer" />
      </div>
    </div>
  );
};
