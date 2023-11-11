import React from "react";
import Image from "next/image";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

export const SpotLightPage2 = ({ onNextClick, onBackClick }: Props) => {
  return (
    <div className="readBook w-full lg:pb-10 pb-5">
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
      <div className="flex justify-center item-center px-5 lg:my-10 my-5">
        <div className="lg:w-[40em]">
          <p>
            Good communication skills is one way to help build healthy
            relationship.
            <br />Read the sentences and choose the answer you think is
            best. When you are done, you can compare your choices with the
            answer sheet at the end of the activity.
          </p>
          <div className="">
            <Image
              width={18}
              height={20}
              src="./assets/images/sportlightForm.svg"
              className="w-full h-[440px] book"
              alt="activity-card"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
