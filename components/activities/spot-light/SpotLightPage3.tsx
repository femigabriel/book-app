import React, { useContext } from "react";
import Image from "next/image";
import { SpotLightGame } from "./SpotLightGame";
import { ResultContext } from "@/context/user/ResultContext";
import { SpotLightResultsModal } from "@/components/modals/SpotLightResultsModal";
import { SpotLightTryHarderModal } from "@/components/modals/SpotLightTryHarderModal";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}
const items = [
  {
    id: 1,
    text: "11. We can work on the projext together",
    correctAns: "green",
  },
  {
    id: 2,
    text: "12. Why should i listen to you!",
    correctAns: "red",
  },
  {
    id: 3,
    text: "13. Did i ask for help?",
    correctAns: "yellow",
  },
  {
    id: 4,
    text: "14. I work better alone.",
    correctAns: "yellow",
  },
  {
    id: 5,
    text: "15. The teacher calls on me because I'm smart",
    correctAns: "red",
  },
  {
    id: 6,
    text: "16. I can help you like",
    correctAns: "red",
  },
  {
    id: 7,
    text: "17. I am proud to be your friend",
    correctAns: "red",
  },
  {
    id: 8,
    text: "18. Are you really going to wear that?",
    correctAns: "yellow",
  },
  {
    id: 9,
    text: "19. Why should anyone hang out with her?",
    correctAns: "red",
  },
  {
    id: 10,
    text: "20. I can't wait to get home. You're so boring",
    correctAns: "red",
  },
];

export const SpotLightPage3 = ({ onNextClick, onBackClick }: Props) => {
  const resultContext = useContext(ResultContext);
  const { state } = resultContext;

  const handleSetResult = (r: boolean, id: string) => {
    resultContext.dispatch({
      type: "setResults",
      payload: [...(state?.results ?? []), { isCorrect: r, id: id }],
    });
  };

  const totalClick = state?.results.filter((items) => items.isCorrect).length;
  const totalResults = state?.results.length;

  return (
    <div className="readBook w-full lg:pb-10 pb-5">
      <header className="px-10 py-7 flex justify-between shadow-sm w-full">
        <Image
          width={17}
          height={19}
          src="/assets/icons/prevIcon.svg"
          className="w-[68px] h-[25px] cursor-pointer"
          alt="back-icon"
          onClick={onBackClick}
        />
        <div>
          <div>
            {totalClick !== totalResults ? (
              <SpotLightTryHarderModal
                totalClick={totalClick}
                totalResults={totalResults}
              />
            ) : (
              <SpotLightResultsModal
                totalClick={totalClick}
                totalResults={totalResults}
              />
            )}
          </div>
        </div>
      </header>
      <div className="flex lg:px-20 lg:my-20 my-5 justify-center items-center w-full">
        <div className="border w-full  border-[#333] b border-t-0 border-x-0">
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
  );
};
