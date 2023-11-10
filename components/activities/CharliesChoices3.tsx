import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

export const CharliesChoices3 = ({ onNextClick, onBackClick }: Props) => {
  return (
    <div className="readBook w-full h-screen ">
      <header className="px-10 py-7 flex justify-between shadow-sm">
        <Image
          width={17}
          height={19}
          src="./assets/icons/previousIcon.svg"
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
      {/* <div className="flex justify-center item-center px-5 my-10">
        <div className="flex flex-col text-[1em]">
          <div className=" mb-5">
            <h3 className="text-[#9B59B6] ">Directions</h3>
            <h4 className="font-semibold">
              Read each sentence carefully and choose the best answer. Refer to
              Charlie’s choices and review the definitions.
            </h4>
          </div>
          <div className="lg:w-[650px] w-full">
            <p>
              Charlie’s mother said “some kids are not only away from their
              parents but they are away from home. <br />
              “That’s horrible”, Charlie said and she began to cry.
            </p>
            <div className="flex">
              <p className="mr-5">Charlie is showing </p>
              <input className="border border-t-0 border-b-1 bordedr-black border-x-0 bg-inherit" value="empathy" />
            </div>
          </div>
        </div>
      </div> */}
      <div className="">
        <Image
          width={18}
          height={20}
          src="./assets/images/choice3.svg"
          className="w-full h-[380px] book"
          alt="activity-card"
          draggable="false"
        />
      </div>
    </div>
  );
};
