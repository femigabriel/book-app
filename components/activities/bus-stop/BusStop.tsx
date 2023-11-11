import React from "react";
import Image from "next/image";

export const BusStop = () => {
  return (
    <div>
      <Image
        width={18}
        height={20}
        src="./assets/images/activity1.svg"
        className="w-[326px] h-[565px] cursor-pointer book"
        alt="activity-card"
        // onClick={onNextClick}
        draggable="false"
      />
    </div>
  );
};
