import React from "react";
import Image from "next/image";

interface Props {
  gotoNextPowerOfWordsPage: () => any;
  // onBackClick: () => any;
}

export const PowerOfWords = ({ gotoNextPowerOfWordsPage }: Props) => {
  return (
    <div>
      <Image
        width={18}
        height={20}
        src="./assets/images/activity2.svg"
        className="w-[326px] h-[565px] cursor-pointer book"
        alt="activity-card"
        onClick={gotoNextPowerOfWordsPage}
        draggable="false"
      />
    </div>
  );
};
