import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  gotoNextSpotLightPages: () => any;
  // onBackClick: () => any;
}

export const SpotLight = () => {
  return (
    <div className="">
      <Link href="/activities/bus-stop">
      <Image
        width={18}
        height={20}
        src="/assets/images/activity4.svg"
        className="w-full h-full cursor-pointer book"
        alt="activity-card"
        // onClick={gotoNextSpotLightPages}
        draggable="false"
      />
      </Link>
    
    </div>
  );
};
