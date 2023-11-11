import React from "react";
import Image from "next/image";

interface Props {
  gotoNextSpotLightPages: () => any;
  // onBackClick: () => any;
}

export const SpotLight = ({ gotoNextSpotLightPages }: Props) => {
  return (
    <div className="choices h-screen">
      <Image
        width={18}
        height={20}
        src="./assets/images/activity4.svg"
        className="lg:w-[326px] lg:h-[565px] cursor-pointer book"
        alt="activity-card"
        onClick={gotoNextSpotLightPages}
        draggable="false"
      />
    </div>
  );
};
