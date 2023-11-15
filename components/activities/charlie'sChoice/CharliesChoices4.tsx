import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ScorePointsModal } from "@/components/modals/ScorePointsModal";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

export const CharliesChoices4 = ({ onNextClick, onBackClick }: Props) => {
  const [active, setActive] = useState("");

  return (
    <div className="readBook w-full h-screen ">
      <header className="px-10 py-7 flex justify-between shadow-sm">
        <Image
          width={17}
          height={19}
          src="/assets/icons/prevIcon.svg"
          className="w-[70.19px] h-[34px] cursor-pointer"
          alt="back-icon"
          onClick={onBackClick}
        />

        <div>
          <ScorePointsModal />
        </div>
      </header>
      <div className="flex justify-center item-center px-5 my-10">
        <div className="text-[1em] w-[673px] ">
          <p>
            Charlie’s friend Mya got on the school bus late. Her hair was not
            combed and her clothes were a mess. Mya also looked very upset.
          </p>
          <p className=" font-semibold">
            What Relationship Skill do you think the other children should have
            demonstrated when Mya got on the bus?
          </p>
          <div className="my-5">
            <div className="options flex gap-2 px-5 py-3 mb-3">
              <span className="">A.</span>
              <span className="">
                Whatever is going on, you will be alright.
              </span>
            </div>
            <div className="options flex gap-2 px-5 py-3 mb-3">
              <span className="">B.</span>
              <span className="">What’s wrong, why do you look like that?</span>
            </div>
            <div className="options flex gap-2 px-5 py-3 mb-3">
              <span className="">C.</span>
              <span className="">Let’s ignore her/ look away.</span>
            </div>
            <div className="options flex gap-2 px-5 py-3 mb-3">
              <span className="">D.</span>
              <span className="">Girl, her use my brush!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
