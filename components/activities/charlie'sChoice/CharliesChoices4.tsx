import React, { useContext, useState } from "react";
import Image from "next/image";
import { ScorePointsModal } from "@/components/modals/ScorePointsModal";
import { QuestionOptions } from "@/types/global";
import { ResultContext } from "@/context/user/ResultContext";
import { CharlieschoiceOptions } from "./CharlieschoiceOptions";
import { TryHarderModal } from "@/components/modals/TryHarderModal";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
  // setResult: any
}

const options = [
  {
    id: 0,
    number: "A.",
    text: "Whatever is going on, you will be alright.",
    correctAns: "true",
  },
  {
    id: 1,
    number: "B.",
    text: "What’s wrong, why do you look like that?",
    correctAns: "false",
  },
  {
    id: 2,
    number: "C.",
    text: "Let’s ignore her/ look away.",
    correctAns: "false",
  },
  {
    id: 3,
    number: "D.",
    text: "Girl, her use my brush!",
    correctAns: "false",
  },
];
export const CharliesChoices4 = ({ onNextClick, onBackClick }: Props) => {
  const [selected, setSelected] = useState("");

  const handleOnClick = (item: string) => {
    setSelected(item);
  };

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
          {selected !== "A." ? <TryHarderModal /> : <ScorePointsModal />}
        </div>
      </header>
      <div className="flex justify-center item-center px-5 my-10">
        <div className="text-[1em] w-[673px] ">
          <p>
            Charlie’s friend Mya got on the school bus late. Her hair was not
            combed and her clothes were a mess. Mya also looked very upset.
          </p>
          <p className=" font-semibold">
            What Relationship Skill do you think the other children should have
            demonstrated when Mya got on the bus?
          </p>
          <div className="my-5">
            {options.map((list, index) => {
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: list.number === selected ? "#e1d1f6" : "",
                  }}
                  onClick={() => handleOnClick(list.number)}
                  className="options flex gap-2 px-5 py-3 mb-3"
                >
                  <span className="">{list.number}</span>
                  <span className="">{list.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
