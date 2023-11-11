import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

export const PowerOfWordsPage1 = ({ onNextClick, onBackClick }: Props) => {
  return (
    <div>
      <header className="px-10 py-7 flex justify-between shadow-sm">
        <Image
          width={17}
          height={19}
          src="./assets/icons/quitIcon.svg"
          className="w-[68px] h-[25px] cursor-pointer"
          alt="back-icon"
          onClick={onBackClick}
        />
        <Image
          width={17}
          height={19}
          src="./assets/icons/nextIcon.svg"
          className="w-[60px] h-[20px] cursor-pointer"
          alt="next-icon"
          onClick={onNextClick}
        />
      </header>

      <div className="flex justify-center item-center px-5 my-10">
        <div className="lg:w-[723px]">
          <h1 className="text-[1.5em] font-semibold mb-5">The Power of Words</h1>
          <div className="lg:mb-10">
            <p className="text-[1.em]">
              Words can hurt or help.
              <br />
              Charlie used words to encourage Mya and show her support. <br />
              Think about a friend, family member or class ,ate that you want to
              encourage. <br />
              What would you say?
            </p>
          </div>
          <div className="text-[1.em]">
            <h3 className="mb-3 text-[#9B59B6]">Directions</h3>
            <p>
              On the next page, read the words on the list.
              <br />
              Cross out any phrase or word that WOULD NOT BE helpful when trying
              to encourage others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
