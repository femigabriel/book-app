import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

export const BustopPage1 = ({ onNextClick, onBackClick }: Props) => {
  return (
    <div className="readBook w-full h-screen ">
      <header className="px-10 py-7 flex justify-between shadow-sm">
        <Image
          width={17}
          height={19}
          src="/assets/icons/quitIcon.svg"
          className="w-[68px] h-[25px] cursor-pointer"
          alt="back-icon"
          onClick={onBackClick}
        />
        <Image
          width={17}
          height={19}
          src="/assets/icons/nextIcon.svg"
          className="w-[60px] h-[20px] cursor-pointer"
          alt="next-icon"
          onClick={onNextClick}
        />
      </header>
      <div className="flex justify-center item-center px-5 lg:my-10">
        <div className="flex flex-col lg:w-[733px] px-5 text-[1em]">
          <div className="flex flex-col lg:mb-[100px] mb-7">
            <h3 className="text-[#9B59B6]">Read Carefully</h3>
            <p className="leading-6">
              Charlie and Mya caught the city bus downtown to go and see Mya’s
              dad who was taken away because he could not prove that he is an
              American citizen.
              <br />
              On the way downtown, they passed many bus stops. Each bus stops
              had the name of a street on it.
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[#9B59B6]">Directions</h3>
            <p className="leading-6">
              Let’s pretend we are on a bus.
              <br />
              Its’s called the R.S. Bus. We need to get off at the right bus
              stop. On the net page look at the descriptions, sentences, words
              and decided if you want to get off at that stop, to do that click
              on the bus stop sign.
              <br />
              Each correct stop is worth 1 point. Let’s ride!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
