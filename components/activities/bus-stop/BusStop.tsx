import React from "react";
import Image from "next/image";

interface Props {
  gotoNextBusStopePage: () => any;
  // onBackClick: () => any;
}

export const BusStop = ({ gotoNextBusStopePage }: Props) => {
  return (
    <div className="choices h-screen">
      <Image
        width={18}
        height={20}
        src="./assets/images/activity1.svg"
        className="w-full h-full cursor-pointer book"
        alt="activity-card"
        onClick={gotoNextBusStopePage}
        draggable="false"
      />
    </div>
  );
};
