import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

export const SpotLightPage1 = ({ onNextClick, onBackClick }: Props) => {
  return (
    <div className="readBook w-full lg:pb-10 pb-5">
      <header className="px-10 py-7 flex justify-between shadow-sm">
        <Link href="/activities/activities-card">
          <Image
            width={17}
            height={19}
            src="/assets/icons/quitIcon.svg"
            className="w-[68px] h-[25px] cursor-pointer"
            alt="back-icon"
            onClick={onBackClick}
          />
        </Link>
        <Image
          width={17}
          height={19}
          src="/assets/icons/nextIcon.svg"
          className="w-[60px] h-[20px] cursor-pointer"
          alt="next-icon"
          onClick={onNextClick}
        />
      </header>

      <div className="flex justify-center item-center px-5 my-10">
        <div className="lg:w-[723px]">
          <h1 className="text-[1.5em] font-semibold mb-5">Stop light</h1>
          <div className="lg:mb-10">
            <p className="text-[1.em]">
              The school bus driver is responsible for the safety of all
              children.
              <br />
              The driver has to follow all the traffic rules.
              <br />
              It’s important to know what each color on the traffic light means.
              <br />
              <br />
              <span className="text-[#039A00]">Green</span> means Go or proceed.{" "}
              <br />
              <span className="text-[#FF0000]">Red</span> means Stop or don’t go
              any further. <br />
              <span className="text-[#FDB804]">Yellow</span> means caution or
              think before you proceed.
              <br />
            </p>
          </div>
          <div className="">
            <Image
              width={17}
              height={19}
              src="./assets/icons/traffic.svg"
              className="w-[40%] h-full cursor-pointer"
              alt="spot-lights"
              draggable="false"
            />
          </div>
          <div className="text-[1.em] lg:w-[40em]">
            <h3 className="mb-3 text-[#9B59B6]">Directions</h3>
            <p>
              Look at the sentences on the next page, assign the sentence green,
              red or yellow by clicking on the desired color
              <br />
              Hint: Think about what made Charlie a good communicator.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
