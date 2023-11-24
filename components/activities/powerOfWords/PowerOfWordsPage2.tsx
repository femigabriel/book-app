import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PowerOfWordsCard } from "./PowerOfWordsCard";
import { ResultContext } from "@/context/user/ResultContext";
import { PowerOfWordsTryHarder } from "@/components/modals/PowerOfWordsTryHarder";
import { PowerOfWordsScorePoint } from "@/components/modals/PowerOfWordsScorePoint";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

const items = [
  { id: 1, number: 1, text: "give up", correctAns: "true" },
  { id: 2, number: 2, text: "nice try", correctAns: "false" },
  { id: 3, number: 3, text: "fearless", correctAns: "false" },
  { id: 4, number: 4, text: "reaasure", correctAns: "false" },
  { id: 5, number: 5, text: "don't have a meltdown", correctAns: "true" },
  { id: 6, number: 6, text: "she is uncontrollable", correctAns: "true" },
  { id: 7, number: 7, text: "confidence", correctAns: "false" },
  { id: 8, number: 8, text: "don't worry", correctAns: "false" },
  { id: 9, number: 9, text: "take care", correctAns: "false" },
  { id: 10, number: 10, text: "kind", correctAns: "false" },
  { id: 11, number: 11, text: "Its going to be okay", correctAns: "false" },
  { id: 12, number: 12, text: "time to panic", correctAns: "true" },
  { id: 13, number: 13, text: "stay hopeful", correctAns: "false" },
  { id: 14, number: 14, text: "everything will be fine", correctAns: "false" },
  { id: 15, number: 15, text: "your room is in chaos", correctAns: "true" },
  { id: 16, number: 16, text: "don't smirk", correctAns: "true" },
  { id: 17, number: 17, text: "confidence", correctAns: "false" },
  { id: 18, number: 18, text: "worried", correctAns: "false" },
  {
    id: 19,
    number: 19,
    text: "that's what good friends are for",
    correctAns: "true",
  },
];

export const PowerOfWordsPage2 = ({ onNextClick, onBackClick }: Props) => {
  const resultContext = useContext(ResultContext);
  const { state } = resultContext;

  const handleSetResult = (r: boolean, id: string) => {
    resultContext.dispatch({
      type: "setPowerResults",
      payload: [...(state?.power ?? []), { isCorrect: r, id: id }],
    });
  };

  const totalClick = state?.power.filter((items) => items.isCorrect).length;
  const totalResults = state?.power.length;

  return (
    <div className="readBook w-full h-screen mb-5">
      <header className="px-10 py-7 flex justify-between shadow-sm">
        <Image
          width={17}
          height={19}
          src="/assets/icons/prevIcon.svg"
          className="w-[70.19px] h-[34px] cursor-pointer"
          alt="back-icon"
          draggable="false"
          onClick={onBackClick}
        />

        <div>
          {totalClick !== totalResults ? (
            <PowerOfWordsTryHarder
              totalClick={totalClick}
              totalResults={totalResults}
            />
          ) : (
            <PowerOfWordsScorePoint
              totalClick={totalClick}
              totalResults={totalResults}
            />
          )}
        </div>
      </header>

      <div className="flex justify-center item-center lg:px-20 my-5 ">
        <div className="flex w-full  bg-white border border-[#303030] shadow-md">
          <div className=" w-full grid grid-cols-2">
            {items.map((list, index) => {
              return (
                <PowerOfWordsCard
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
