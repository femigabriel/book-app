import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { WrongStopModal } from "@/components/modals/WrongStopModal";
import { BusStopCard } from "./BusStopCard";
import { ResultContext } from "@/context/user/ResultContext";
import { BusStopScorePoint } from "@/components/modals/BusStopScorePoint";
import { BusStopTryHarderModal } from "@/components/modals/BusStopTryHarderModal";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

const items = [
  {
    id: 11,
    busNumber: 11,
    content: "Why did you buy that shirt, it’s too small",
    correctAns: "true",
  },
  {
    id: 12,
    busNumber: 12,
    content: "Let’s work together",
    correctAns: "false",
  },
  {
    id: 13,
    busNumber: 13,
    content: "I appreciate you",
    correctAns: " true",
  },
  {
    id: 14,
    busNumber: 14,
    content: "I’m in charge, not you!",
    correctAns: "false",
  },
  {
    id: 15,
    busNumber:15, content:"Move",
    correctAns: "false",
  },
  {
    id: 6,
    busNumber: 16, content: "I was here first",
    correctAns: "true",
  },
  {
    id: 17,
    busNumber: 17,
    content:"I’m not sharing",
    correctAns: "false",
  },
  {
    id: 8,
    busNumber: 18,
  content:"Can i help you?",
    correctAns: "false",
  },
  {
    id: 9,
    busNumber: 19,
    content: "I don’t want to sit next to you",
    correctAns: " true",
  },

];

export const BustopPage3 = ({ onNextClick, onBackClick }: Props) => {
  const resultContext = useContext(ResultContext);
  const { state } = resultContext;

  const handleSetResult = (r: boolean, id: string) => {
    resultContext.dispatch({
      type: "setBusStopResults",
      payload: [...(state?.busStopResults ?? []), { isCorrect: r, id: id }],
    });
  };

  const totalClick = state?.busStopResults.filter(
    (items) => items.isCorrect
  ).length;
  const totalResults = state?.busStopResults.length;

  return (
    <div className="readBook w-full h-full">
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
            <BusStopTryHarderModal
              totalClick={totalClick}
              totalResults={totalResults}
            />
          ) : (
            <BusStopScorePoint
              totalClick={totalClick}
              totalResults={totalResults}
            />
          )}
        </div>
      </header>

      <div className="px-10 lg:px-32  my-5 lg:my-10 grid grid-cols-4">
        {items.map((list, index) => {
          return (
            <div  key={index} className="mb-5">
              <BusStopCard
                list={list}
                setResult={handleSetResult}
                key={index}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
