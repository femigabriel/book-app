import React from "react";
import Image from "next/image";
import { TryHarderModal } from "@/components/modals/TryHarderModal";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

export const SpotLightPage4 = ({ onNextClick, onBackClick }: Props) => {
  return (
    <div className="readBook w-full lg:pb-10 pb-5">
      <header className="px-10 py-7 flex justify-between shadow-sm w-full">
        <Image
          width={17}
          height={19}
          src="/assets/icons/prevIcon.svg"
          className="w-[68px] h-[25px] cursor-pointer"
          alt="back-icon"
          onClick={onBackClick}
        />

        {/* <Image
          width={17}
          height={19}
          src="/assets/icons/nextIcon.svg"
          className="w-[60px] h-[20px] cursor-pointer"
          alt="next-icon"
          onClick={onNextClick}
        /> */}
        <div>
          <TryHarderModal />
        </div>
      </header>
      <div className="flex justify-center item-center px-5 lg:my-10 my-5">
        <Image
          width={18}
          height={20}
          src="/assets/images/sportlightForm3.svg"
          className="w-full h-[440px] book"
          alt="activity-card"
          draggable="false"
        />
      </div>
    </div>
  );
};
