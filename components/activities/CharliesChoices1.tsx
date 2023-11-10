import React from "react";
import { ArrowRightOutlined, CloseOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

export const CharliesChoices1 = ({ onNextClick, onBackClick }: Props) => {
  return (
    <div className="readBook w-full h-screen ">
      <header className="px-10 py-7 flex justify-between shadow-sm">
        <Image
          width={17}
          height={19}
          src="./assets/icons/quitIcon.svg"
          className="w-[70.19px] h-[29px] cursor-pointer"
          alt="back-icon"
          onClick={onBackClick}
        />
        <Image
          width={17}
          height={19}
          src="./assets/icons/nextIcon.svg"
          className="w-[70px] h-[25px] cursor-pointer"
          alt="next-icon"
          onClick={onNextClick}
        />
      </header>
      <div className="flex justify-center item-center px-5 my-10">
        <div className="">
          <div className="text-[1em] mb-10">
            <h1 className="font-bold text-[1.65em] ">Charlie's choice</h1>
            <h3 className="text-[#9B59B6] ]">Reflection</h3>
            <h4 className="">
              Let’s talk about some of the Relationship Skills that Charlie and
              her friends have in the story.
            </h4>
          </div>
          <Image
            width={18}
            height={20}
            src="./assets/images/choice1.svg"
            className="w-full h-[320px] book "
            alt="activity-card"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
};
