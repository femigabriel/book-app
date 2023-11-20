import React from "react";
import Image from "next/image";
import Link from "next/link";
import { WrongStopModal } from "@/components/modals/WrongStopModal";
import { BusStopCard } from "./BusStopCard";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}
export const BustopPage3 = ({ onNextClick, onBackClick }: Props) => {
  return (
    <div className="readBook w-full h-full">
      <header className="px-10 py-7 flex justify-between shadow-sm">
        <Image
          width={17}
          height={19}
          src="/assets/icons/prevIcon.svg"
          className="w-[70.19px] h-[34px] cursor-pointer"
          alt="back-icon"
          draggable="false"
          onClick={onBackClick}
        />
        <div>
          <WrongStopModal />
        </div>
      </header>

      <div className="px-10 lg:px-32  my-5 lg:my-10 flex justify-center">
        <div className="w-full">
          <div className="lg:flex w-full justify-between ">
            <div className="lg:pl-10">
              <BusStopCard
                busNumber="11"
                content="Why did you buy that shirt, it’s too small"
              />
            </div>
            <div className="lg:flex lg:gap-7">
              <div className="lg:mt-20">
                <BusStopCard busNumber="13" content="I appreciate you" />
              </div>
              <div>
                <BusStopCard busNumber="12" content="Let’s work together" />
              </div>
              <div className="lg:mt-20">
                <BusStopCard busNumber="14" content="I’m in charge, not you!" />
              </div>
            </div>
          </div>

          <div className="lg:flex w-full justify-between">
            <div className="relative lg:bottom-[70px] lg:right-10">
              <BusStopCard busNumber="15" content="Move" />
            </div>
            <div className="lg:mt-7">
              <BusStopCard busNumber="17" content="I’m not sharing" />
            </div>
            <div className="lg:flex">
              <div className="relative lg:bottom-[70px] lg:right-10">
                <BusStopCard busNumber="16" content="I was here first" />
              </div>
              <div className="lg:mt-7">
                <BusStopCard busNumber="18" content="Can i help you?" />
              </div>
            </div>
          </div>

          <div className="lg:flex justify-center w-full">
            <div className="lg:mx-20 relative lg:right-[200px] lg:bottom-[100px]">
              <div></div>
            </div>
            <div className="relative lg:bottom-[100px]">
              <BusStopCard
                busNumber="19"
                content="I don’t want to sit next to you"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
