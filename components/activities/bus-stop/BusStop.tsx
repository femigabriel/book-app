import React from "react";
import Image from "next/image";

interface Props {
  gotoNextBusStopePage: () => any;
  // onBackClick: () => any;
}

export const BusStop = ({ gotoNextBusStopePage }: Props) => {
  return (
    <div>
      <Image
        width={18}
        height={20}
        src="./assets/images/activity1.svg"
        className="w-[326px] h-[565px] cursor-pointer book"
        alt="activity-card"
        onClick={gotoNextBusStopePage}
        draggable="false"
      />
    </div>
  );
};
