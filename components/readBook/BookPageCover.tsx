import React from "react";
import { ReadBookHeader } from "./ReadBookHeader";
import Image from "next/image";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}
export const BookPageCover = ({ onNextClick, onBackClick }: Props) => {
  return (
    <div className="coverBook w-full h-screen ">
      <ReadBookHeader />
      <div className="flex justify-between items-center  px-5 cover">
      
        <LeftOutlined onClick={onBackClick} className="w cursor-pointer" />
        <div>
          <Image
            width={18}
            height={20}
            src="./assets/images/book1.svg"
            className="w-[680px] h-[539px] cursor-pointer book"
            alt="cover"
          />
        </div>
        <RightOutlined onClick={onNextClick} className="w cursor-pointer" />
      </div>
    </div>
  );
};
