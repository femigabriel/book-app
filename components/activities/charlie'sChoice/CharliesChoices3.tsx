import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

export const CharliesChoices3 = ({ onNextClick, onBackClick }: Props) => {
  const [firstAns, setfirstAns] = useState("");
  const [secondAns, setsecondAns] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!firstAns || firstAns.toLowerCase() !== "empathy") {
      setError(true);
      return;
    }
    if (!secondAns || secondAns.toLowerCase() !== "empathy") {
      setError(true);
      return;
    }
    onNextClick();
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
          // onClick={onNextClick}
        />
      </header>
      <form
        action=""
        onSubmit={handleSubmit}
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
              <p className=" font-semibold lg:w-[18em]">Charlie is showing </p>
              <input
                placeholder=""
                type="text"
                value={"empathy"}
                className="input-field bg-inherit px-5"
                onChange={(e) => setfirstAns(e.target.value)}
              />
            </div>
          </div>

          <div className="text-[1em] lg:w-[673px] lg:mt-10">
            <p>
              Charlie held Mya as she cried on her shoulder. The second bus
              driver walked over and asks “Are you girls okay?” I can walk you
              too into the counselor’s office.
            </p>
            <div className="flex w-full mt-2">
              <p className=" font-semibold w-[18em] lg:w-[24em]">
                The bus driver is showing
              </p>
              <input
                placeholder=""
                type="text"
                value={"consideration"}
                className="input-field bg-inherit px-5"
                onChange={(e) => setsecondAns(e.target.value)}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
