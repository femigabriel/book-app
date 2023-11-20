import React, { useState } from "react";
import Image from "next/image";
import { BusStopCard } from "./BusStopCard";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}
export const BustopPage2 = ({ onNextClick, onBackClick }: Props) => {

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
        <Image
          width={17}
          height={19}
          src="/assets/icons/nextIcon.svg"
          className="w-[60px] h-[20px] cursor-pointer"
          alt="next-icon"
          draggable="false"
          onClick={onNextClick}
        />
      </header>

      <div className="px-10 lg:px-32  my-5 lg:my-10 flex justify-center">
        <div className="w-full">
          <div className="lg:flex w-full justify-between ">
            <div className="lg:pl-10">
              <BusStopCard busNumber="1" content="Cooperation" />
            </div>
            <div className="lg:flex lg:gap-7">
              <div className="lg:mt-20">
                <BusStopCard busNumber="3" content="being respectful" />
              </div>
              <div>
                <BusStopCard busNumber="2" content="Not compromising" />
              </div>
              <div className="lg:mt-20">
                <BusStopCard busNumber="4" content="Not listening" />
              </div>
            </div>
          </div>

          <div className="lg:flex w-full justify-between">
            <div className="relative lg:bottom-[70px] lg:right-10">
              <BusStopCard busNumber="5" content="Encouragement" />
            </div>
            <div className="lg:mt-7">
              <BusStopCard
                busNumber="7"
                content="Saying mean things to hurt others"
              />
            </div>
            <div className="lg:flex">
              <div className="relative lg:bottom-[70px] lg:right-10">
                <BusStopCard
                  busNumber="6"
                  content="Showing concern for others"
                />
              </div>
              <div className="lg:mt-7">
                <BusStopCard busNumber="8" content="Selfish" />
              </div>
            </div>
          </div>

          <div className="lg:flex justify-center w-full">
            <div className="lg:mx-20 relative lg:right-[200px] lg:bottom-[100px]">
              <BusStopCard busNumber="9" content="Caring for others feelings" />
            </div>
            <div className="relative lg:bottom-[100px]">
              <BusStopCard busNumber="10" content="Desire to help" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
