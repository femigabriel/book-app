import React, { useState } from "react";
import Image from "next/image";
import { BusStopCard } from "./BusStopCard";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}
export const BustopPage2 = ({ onNextClick, onBackClick }: Props) => {
  const [active, setActive] = useState("");

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

      <div className="px-5 lg:px-32  my-5 lg:my-10 flex justify-center">
        <div className="lg:flex w-full justify-between">
          <div>
            <BusStopCard busNumber="1" content="Cooperation" />
          </div>
          <div className="flex">
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
      </div>
    </div>
  );
};
