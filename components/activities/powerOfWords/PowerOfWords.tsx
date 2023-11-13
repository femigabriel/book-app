import React from "react";
import Image from "next/image";

interface Props {
  gotoNextPowerOfWordsPage: () => any;
  // onBackClick: () => any;
}

export const PowerOfWords = ({ gotoNextPowerOfWordsPage }: Props) => {
  return (
    <div className="choices h-screen">
      <Image
        width={18}
        height={20}
        src="./assets/images/activity2.svg"
        className="lg:w-full h-full cursor-pointer book"
        alt="activity-card"
        onClick={gotoNextPowerOfWordsPage}
        draggable="false"
      />
    </div>
  );
};
