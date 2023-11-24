import React, { useContext, useState } from "react";
import Image from "next/image";
import { BusStopCard } from "./BusStopCard";
import { ResultContext } from "@/context/user/ResultContext";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

export const BustopPage2 = ({ onNextClick, onBackClick }: Props) => {
  const resultContext = useContext(ResultContext);
  const { state } = resultContext;

  const handleSetResult = (r: boolean, id: string) => {
    resultContext.dispatch({
      type: "setBusStopResults",
      payload: [...(state?.busStopResults ?? []), { isCorrect: r, id: id }],
    });
  };
  

  const items = [
    {
      id: 1,
      busNumber: 1,
      content: "Cooperation",
      correctAns: "true",
    },
    {
      id: 2,
      busNumber: 2,
      content: "being respectful",
      correctAns: "true",
    },
    {
      id: 3,
      busNumber: 3,
      content: "Not compromising",
      correctAns: "true",
    },
    {
      id: 4,
      busNumber: 4,
      content: "Not listening",
      correctAns: "false",
    },
    {
      id: 5,
      busNumber: 5,
      content: "Cooperation",
      correctAns: "true",
    },
    {
      id: 6,
      busNumber: 6,
      content: "Cooperation",
      correctAns: "true",
    },
    {
      id: 7,
      busNumber: 7,
      content: "Cooperation",
      correctAns: "false",
    },
    {
      id: 8,
      busNumber: 8,
      content: "Cooperation",
      correctAns: "false",
    },
    {
      id: 9,
      busNumber: 9,
      content: "Cooperation",
      correctAns: "true",
    },
    {
      id: 10,
      busNumber: 10,
      content: "Cooperation",
      correctAns: "true",
    },
  ];

 
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
        <Image
          width={17}
          height={19}
          src="/assets/icons/nextIcon.svg"
          className="w-[60px] h-[20px] cursor-pointer"
          alt="next-icon"
          draggable="false"
          onClick={onNextClick}
        />
      </header>

      <div className="px-10 lg:px-32  my-5 lg:my-10 grid lg:grid-cols-4">
        {items.map((list, index) => {
          return (
            <div className="mb-5"  key={index}>
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
