import React from "react";
import Image from "next/image";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}
export const BustopPage2 = ({ onNextClick, onBackClick }: Props) => {
  return (
    <div className="readBook w-full h-screen ">
      <header className="px-10 py-7 flex justify-between shadow-sm">
        <Image
          width={17}
          height={19}
          src="./assets/icons/prevIcon.svg"
          className="w-[70.19px] h-[34px] cursor-pointer"
          alt="back-icon"
          draggable="false"
          onClick={onBackClick}
        />
        <Image
          width={17}
          height={19}
          src="./assets/icons/nextIcon.svg"
          className="w-[60px] h-[20px] cursor-pointer"
          alt="next-icon"
          draggable="false"
          onClick={onNextClick}
        />
      </header>
      <div className="flex justify-center item-center px-5 my-10">
        <div className="">
          <Image
            width={18}
            height={20}
            src="./assets/images/bustopGroups1.svg"
            className="w-full h-[480px] book"
            alt="activity-card"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
};
