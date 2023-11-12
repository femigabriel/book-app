import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  gotoNextSpotLightPages: () => any;
  // onBackClick: () => any;
}

export const SpotLight = () => {
  return (
    <div className="choices h-screen">
      <Link href="/bus-stop">
      <Image
        width={18}
        height={20}
        src="./assets/images/activity4.svg"
        className="w-full h-full cursor-pointer book"
        alt="activity-card"
        // onClick={gotoNextSpotLightPages}
        draggable="false"
      />
      </Link>
    
    </div>
  );
};
