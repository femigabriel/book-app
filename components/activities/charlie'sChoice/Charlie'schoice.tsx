import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  gotoNextChaliePage: () => any;
  // onBackClick: () => any;
}
export const Charlieschoice = () => {
  return (
    <div className="">
  <Link href="/charlies-choice">
  <Image
        width={18}
        height={20}
        src="./assets/images/activity3.svg"
        className="w-full h-full cursor-pointer book"
        alt="activity-card"
        // onClick={gotoNextChaliePage}
        draggable="false"
      />
  </Link>

    
    </div>
  );
};
