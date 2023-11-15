import React from "react";
import Image from "next/image";
import Link from "next/link";



export const BusStop = () => {
  return (
    <div className="">
      <Link href="/activities/bus-stop">
      <Image
        width={18}
        height={20}
        src="/assets/images/activity1.svg"
        className="w-full h-full cursor-pointer book"
        alt="activity-card"
        draggable="false"
      />
      </Link>
     
    </div>
  );
};
