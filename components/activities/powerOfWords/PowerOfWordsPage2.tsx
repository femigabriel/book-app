import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PowerOfWordsCard } from "./PowerOfWordsCard";
import { ResultContext } from "@/context/user/ResultContext";
import { TryHarderModal } from "@/components/modals/TryHarderModal";
import { ScorePointsModal } from "@/components/modals/ScorePointsModal";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

const items = [
  { id: 1, number: 1, text: "give up", correctAns: true },
  { id: 2, number: 2, text: "nice try", correctAns: true },
  { id: 3, number: 3, text: "fearless", correctAns: true },
  { id: 4, number: 4, text: "reaasure", correctAns: false },
  { id: 5, number: 5, text: "don't have a meltdown", correctAns: true },
  { id: 6, number: 6, text: "she is uncontrollable", correctAns: true },
  { id: 7, number: 7, text: "confidence", correctAns: false },
  { id: 8, number: 8, text: "don't worry", correctAns: false },
  { id: 9, number: 9, text: "take care", correctAns: true },
  { id: 10, number: 10, text: "kind", correctAns: true },
];
export const PowerOfWordsPage2 = ({ onNextClick, onBackClick }: Props) => {
  const resultContext = useContext(ResultContext);
  const { state } = resultContext;

  const handleSetResult = (r: boolean, id: string) => {
    resultContext.dispatch({
      type: "setPowerResults",
      payload: [...(state?.results ?? []), { isCorrect: r, id: id }],
    });
  };

  const totalClick = state?.results.filter((items) => items.isCorrect).length;
  const totalResults = state?.results.length;
  console.log(state?.results);

  return (
    <div className="readBook w-full h-screen ">
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
            <TryHarderModal
              totalClick={totalClick}
              totalResults={totalResults}
            />
          ) : (
            <ScorePointsModal
              totalClick={totalClick}
              totalResults={totalResults}
            />
          )}
        </div>
      </header>

      <div className="flex justify-center item-center lg:px-20 my-5 ">
        <div className="flex w-full bg-white shadow-md">
          <div className="border px-5 py-10 w-full">
            {items.map((list, index) => {
              return (
                <PowerOfWordsCard
                  list={list}
                  setResult={handleSetResult}
                  key={index}
                />
              );
            })}

            {/* <PowerOfWordsCard text={"nice try"} id={2} />
            <PowerOfWordsCard text={"fearless"} id={3} />
            <PowerOfWordsCard text={"reaasure"} id={4} />
            <PowerOfWordsCard text={"don't have a meltdown"} id={5} />
            <PowerOfWordsCard text={"she is uncontrollable"} id={6} />
            <PowerOfWordsCard text={"confidence"} id={7} />
            <PowerOfWordsCard text={"don't worry"} id={8} />
            <PowerOfWordsCard text={"take care"} id={9} />
            <PowerOfWordsCard text={"kind"} id={10} /> */}
          </div>

          {/* <div className="border px-5 py-10 w-full">
            <PowerOfWordsCard text={"Its going to be okay"} id={11} />
            <PowerOfWordsCard text={"time to panic"} id={12} />
            <PowerOfWordsCard text={"stay hopeful"} id={13} />
            <PowerOfWordsCard text={"everything will be fine"} id={14} />
            <PowerOfWordsCard text={"your room is in chaos"} id={15} />
            <PowerOfWordsCard text={"don't smirk"} id={16} />
            <PowerOfWordsCard text={"worried"} id={17} />
            <PowerOfWordsCard text={"you tried"} id={18} />
            <PowerOfWordsCard
              text={"that's what good friends are for"}
              id={19}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};
