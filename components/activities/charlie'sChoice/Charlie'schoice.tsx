import React from "react";
import Image from "next/image";

interface Props {
  gotoNextChaliePage: () => any;
  // onBackClick: () => any;
}
export const Charlieschoice = ({ gotoNextChaliePage }: Props) => {
  return (
    <div>
      <Image
        width={18}
        height={20}
        src="./assets/images/activity3.svg"
        className="w-[326px] h-[565px] cursor-pointer book"
        alt="activity-card"
        onClick={gotoNextChaliePage}
        draggable="false"
      />
    </div>
  );
};
