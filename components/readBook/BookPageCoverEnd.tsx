import React from "react";
import { ReadBookHeader } from "./ReadBookHeader";
import Image from "next/image";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}
export const BookPageCoverEnd = ({ onNextClick, onBackClick }: Props) => {
  return (
    <div className="coverBook w-full h-screen">
      <ReadBookHeader />
      <div className="flex justify-between items-center cover px-5">
        <LeftOutlined onClick={onBackClick} className="w cursor-pointer" />
        <div className="flex w-full items-center bookBackcover">
          <Image
            width={17}
            height={19}
            src="./assets/images/backCover.svg"
            className="w-[680px] px-10 h-[488.355px] cursor-pointer book mb-5"
            alt="cover"
          />
          <button
            className="text-[0.85em] text-[#9B59B6] rounded-[90px] border-[#663972] border  h-[47px] w-[306px]"
            onClick={onNextClick}
          >
            Start All over
          </button>
        </div>

        <RightOutlined onClick={onNextClick} className="w cursor-pointer" />
      </div>
    </div>
  );
};
