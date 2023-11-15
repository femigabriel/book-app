import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  gotoNextPowerOfWordsPage: () => any;
  // onBackClick: () => any;
}

export const PowerOfWords = () => {
  return (
    <div className=" ">
      <Link href="/activities/power-of-choice">
      <Image
        width={18}
        height={20}
        src="/assets/images/activity2.svg"
        className="lg:w-full h-full cursor-pointer book"
        alt="activity-card"
        // onClick={gotoNextPowerOfWordsPage}
        draggable="false"
      />
      </Link>
     
    </div>
  );
};
