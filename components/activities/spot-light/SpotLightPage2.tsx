import React, { useContext, useState } from "react";
import Image from "next/image";
import { SpotLightGame } from "./SpotLightGame";
import { ResultInterface } from "@/types/global";
import { ResultContext } from "@/context/user/ResultContext";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}
const items = [
  {
    id: 1,
    text: "1. You are determined",
    correctAns: "green",
  },
  {
    id: 2,
    text: "2. Great work!",
    correctAns: "green",
  },
  {
    id: 3,
    text: "3. I don’t need your help.",
    correctAns: "red",
  },
  {
    id: 4,
    text: "4. Could you please stop!.",
    correctAns: "red",
  },
  {
    id: 5,
    text: "5. Love your ideas.",
    correctAns: "red",
  },
  {
    id: 6,
    text: "6. Listen to me!",
    correctAns: "red",
  },
  {
    id: 7,
    text: "7. I don’t want to talk.",
    correctAns: "yellow",
  },
  {
    id: 8,
    text: "8. What’s going on?.",
    correctAns: "yellow",
  },
  {
    id: 9,
    text: "9. I don’t have time for this.",
    correctAns: "red",
  },
  {
    id: 10,
    text: "10. I am smarter than you.",
    correctAns: "red",
  },
];

export const SpotLightPage2 = ({ onNextClick, onBackClick }: Props) => {
  const resultContext = useContext(ResultContext);
  const { state } = resultContext;

  const handleSetResult = (r: boolean, id: string) => {
    resultContext.dispatch({
      type: "setResults",
      payload: [...(state?.results ?? []), { isCorrect: r, id: id }],
    });
  };


 
  return (
    <div className="readBook w-full h-full  lg:pb-10 pb-5">
      <header className="px-10 py-7 flex justify-between shadow-sm">
        <Image
          width={17}
          height={19}
          src="/assets/icons/prevIcon.svg"
          className="w-[68px] h-[25px] cursor-pointer"
          alt="back-icon"
          onClick={onBackClick}
        />
        <Image
          width={17}
          height={19}
          src="/assets/icons/nextIcon.svg"
          className="w-[60px] h-[20px] cursor-pointer"
          alt="next-icon"
          onClick={onNextClick}
        />
      </header>

      <div className="flex justify-center item-center px-5 lg:px-20 ">
        <div className="w-full">
          <p className="lg:text-[1em] text-[0.85em] my-5">
            Good communication skills is one way to help build healthy
            relationship.
            <br />
            Read the sentences and choose the answer you think is best. When you
            are done, you can <br /> compare your choices with the answer sheet
            at the end of the activity.
          </p>
          <div className="border border-[#333] b border-t-0 border-x-0">
            {items.map((list, index) => {
              return (
                <SpotLightGame
                  list={list}
                  setResult={handleSetResult}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
