import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

export const StorybookIntro = ({ onNextClick, onBackClick }: Props) => {
  return (
    <div className="readBook w-full lg:h-screen">
      <header className="px-10 py-7 flex justify-between ">
        <Link href="/" className="flex cursor-pointer">
          <Image
            width={17}
            height={19}
            src="./assets/icons/back.svg"
            className="w-[24px] h-[24px] mr-3"
            alt="back-icon"
          />
          <span>Back</span>
        </Link>

        <div className="flex">
          <div className="flex cursor-pointer">
            <Image
              width={17}
              height={19}
              src="./assets/icons/exclaIcon.svg"
              className="w-[20px] h-[20px] mt-2 cursor-pointer"
              alt="avatar"
            />
            <span className="mx-2 flex items-center  text-[0.750em] text-[#9B59B6]">
              Read Carefully
            </span>
          </div>
        </div>
      </header>
      <div className="flex justify-center item-center my-10 px-5">
        <div className="text-center">
          <h3 className="text-[1em] font-medium">Introduction</h3>
          <h1 className="text-[#9B59B6] text-[1.5em] font-semibold">
            Relationship Skills
          </h1>
          <div className="lg:pt-10 text-[1em] lg:w-[723px] text-left">
            <p className="leading-9">
              Charlie cares about other people and how they feel. She doesn’t
              like it when people are hurt or upset.
              <br />
              When she notices that a person feels bad, she tries to help.
              Charlie believes that everyone deserves respect:
              <span className="text-[#9B59B6]">
                Charlie has good Relationship Skills.
              </span>
              <br />
              Charlie is able to tell her family and her friends how she feels.
              She also listens to what they have to say. <br />
              She’s really great at communicating. We can learn about good
              Relationship Skills as we read Charlie’s Big Gift.
            </p>
          </div>
          <Link href="/activities-card" className=" cursor-pointer lg:float-right">
            <button
              className="bg-[#9B59B6] w-[202px] h-[47px] text-[#F8F8F8] text-[0.85em] rounded-[24px]  my-5 "
              // onClick={onNextClick}
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
