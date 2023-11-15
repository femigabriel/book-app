import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  gotoNextChaliePage: () => any;
  // onBackClick: () => any;
}
export const Charlieschoice = () => {
  return (
    <div className="bg-[#242424] pb-10 rounded-[24px] lg:h-[485px]">
     <div className="bg-[#FD8C4D] rounded-[24px] rounded-b-none h-[80px]"></div>
        <div className=" flex justify-center items-center relative ">
      
          <div className="mt-16">
            <h1 className="text-[#F6F4F8] text-[1.5em] text-center lg:w-[8em] my-20">
              CHARLIE’S CHOICES
            </h1>
            <div className="">
              <Link href="/activities/charlies-choice" className="bookBtn ">
                <button className="bg-[#9B59B6] h-[47px] text-[#F8F8F8] text-[0.85em] rounded-[24px] flex justify-center items-center w-full lg:w-[202px] my-5">
                  <Image
                    src="/assets/icons/playIcon.svg"
                    width={18}
                    height={18}
                    className="w-[18px] h-[18px] cursor-pointer mr-2 logo"
                    alt="play"
                  />
                  <span>play</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
     
    </div>
  );
};
