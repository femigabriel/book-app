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
    <div className="coverBook">
      <ReadBookHeader />
      <div className="flex justify-between items-center coverBook w-full px-5">
        {/* <Image
          width={17}
          height={19}
          src="./assets/icons/forwardIcon.svg"
          className="w-[17px] h-[19px] cursor-pointer cover"
          alt="forward-icon"
          onClick={onBackClick}
        /> */}
        <LeftOutlined onClick={onBackClick} className="w cursor-pointer" />
        <div>
          <Image
            width={17}
            height={19}
            src="./assets/images/bookFlip.svg"
            className="w-full px-10 h-[538.355px] cursor-pointer "
            alt="cover"
          />
        </div>
        {/* <Image
          width={17}
          height={19}
          src="./assets/icons/backIcon.svg"
          className="w-[17px] h-[19px] cursor-pointer cover"
          alt="forward-icon"
          onClick={onNextClick}
        /> */}
        <RightOutlined onClick={onNextClick} className="w cursor-pointer" />
      </div>
    </div>
  );
};
