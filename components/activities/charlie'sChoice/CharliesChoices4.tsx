import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

export const CharliesChoices4 = ({ onNextClick, onBackClick }: Props) => {
  return (
    <div className="readBook w-full h-screen ">
      <header className="px-10 py-7 flex justify-between shadow-sm">
        <Image
          width={17}
          height={19}
          src="./assets/icons/prevIcon.svg"
          className="w-[70.19px] h-[34px] cursor-pointer"
          alt="back-icon"
          onClick={onBackClick}
        />

        {/* <Link href="/activities"> */}
          <Image
            width={17}
            height={19}
            src="./assets/icons/finishIcon.svg"
            className="w-[60px] h-[20px] cursor-pointer"
            alt="next-icon"
            onClick={onNextClick}
          />
        {/* </Link> */}
      </header>
      <div className="flex justify-center item-center px-5 my-10">
        <div className="">
          <Image
            width={18}
            height={20}
            src="./assets/images/choice4.svg"
            className="w-full h-[380px] book"
            alt="activity-card"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
};
