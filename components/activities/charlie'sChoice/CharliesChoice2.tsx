import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

export const CharliesChoices2 = ({ onNextClick, onBackClick }: Props) => {
  const [firstAns, setfirstAns] = useState("");
  const [secondAns, setsecondAns] = useState("");
  const [errorFirst, setErrorFirst] = useState(false);
  const [errorSecond, setErrorSecond] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (hasInValidData()) {
      return;
    }
    onNextClick();
  };

  const hasInValidData = () => {
    let response = false;
    if (!firstAns || firstAns.toLowerCase() !== "empathy") {
      setErrorFirst(true);
      response = true;
    } else {
      setErrorFirst(false);
      response = false;
    }
    if (!secondAns || secondAns.toLowerCase() !== "consideration") {
      setErrorSecond(true);
      response = true;
    } else {
      setErrorSecond(false);
      response = false;
    }
    return response;
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
        <Image
          width={17}
          height={19}
          src="/assets/icons/nextIcon.svg"
          className="w-[60px] h-[20px] cursor-pointer"
          alt="next-icon"
          onClick={(e) => handleSubmit(e)}
        />
      </header>

      <form
        action=""
        // onSubmit={handleSubmit}
        className="flex justify-center item-center px-5 my-10"
      >
        <div>
          <div className="text-[1em] w-[673px]">
            <h3 className="text-[#9B59B6] my-3">Directions</h3>
            <p className=" font-semibold mb-5">
              Read each sentence carefully and choose the best answer. Refer to
              Charlie’s choices and review the definitions.
            </p>
            <p>
              Charlie’s mother said “some kids are not only away from their
              parents but they are away from home.” “That’s horrible”, Charlie
              said and she began to cry.
            </p>
            <div className="flex w-full mt-2">
              <p className=" font-semibold w-[12em]">Charlie is showing </p>
              <div className="w-full">
                <input
                  placeholder=""
                  type="text"
                  className="input-field bg-inherit"
                  onChange={(e) => setfirstAns(e.target.value)}
                />
                {errorFirst && (
                  <div className="text-[#F13737] text-[0.750em]">
                    *Incorrect Answer, *Hint "empathy"
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="text-[1em] w-[673px] lg:mt-10">
            <p>
              Charlie held Mya as she cried on her shoulder. The second bus
              driver walked over and asks “Are you girls okay?” I can walk you
              too into the counselor’s office.
            </p>
            <div className="flex w-full mt-2">
              <p className=" font-semibold w-[18em]">
                The bus driver is showing
              </p>
              <div className="w-full">
                <input
                  placeholder=""
                  type="text"
                  className="input-field bg-inherit"
                  onChange={(e) => setsecondAns(e.target.value)}
                />
                {errorSecond && (
                  <div className="text-[#F13737] text-[0.750em]">
                    *Incorrect Answer, *Hint "consideration"
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
