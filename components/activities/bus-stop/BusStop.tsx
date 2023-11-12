import React from "react";
import Image from "next/image";
import Link from "next/link";



export const BusStop = () => {
  return (
    <div className="choices h-screen">
      <Link href="/bus-stop">
      <Image
        width={18}
        height={20}
        src="./assets/images/activity1.svg"
        className="w-full h-full cursor-pointer book"
        alt="activity-card"
        draggable="false"
      />
      </Link>
     
    </div>
  );
};
