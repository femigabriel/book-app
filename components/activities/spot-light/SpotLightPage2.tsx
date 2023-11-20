import React, { useState } from "react";
import Image from "next/image";
import { SpotLightGame } from "./SpotLightGame";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

export const SpotLightPage2 = ({ onNextClick, onBackClick }: Props) => {
  const [active, setActive] = useState<any[]>([]);

  const handleClick = (item: any) => {
    const res = findItem(item);
    if (res) {
      setActive(active.filter((e: { id: any }) => e.id != item.id));
    } else {
      setActive((current) => [...current, item]);
    }
  };
  const isSelected = (item: any): boolean => {
    return findItem(item) !== undefined;
  };

  const findItem = (item: any): any | undefined => {
    return active.find((i) => item.id === i.id);
  };

  const items = [
    {
      id: 1,
      text: "1. You are determined",
      colorRed: (
        <button className="w-[36px] rounded-full  h-[36px] bg-[#FF0000]"></button>
      ),
      colorGreen: (
        <button className="w-[36px] rounded-full h-[36px] bg-[#039A00]"></button>
      ),
      colorYellow: (
        <button className="w-[36px] rounded-full  h-[36px] bg-[#FDB804]"></button>
      ),
    },
    {
      id: 2,
      text: "2. Great work!",
      colorRed: (
        <button className="w-[36px] rounded-full  h-[36px] bg-[#FF0000]"></button>
      ),
      colorGreen: (
        <button className="w-[36px] rounded-full h-[36px] bg-[#039A00]"></button>
      ),
      colorYellow: (
        <button className="w-[36px] rounded-full  h-[36px] bg-[#FDB804]"></button>
      ),
    },
    {
      id: 3,
      text: "3. I don’t need your help.",
      colorRed: (
        <button className="w-[36px] rounded-full  h-[36px] bg-[#FF0000]"></button>
      ),
      colorGreen: (
        <button className="w-[36px] rounded-full h-[36px] bg-[#039A00]"></button>
      ),
      colorYellow: (
        <button className="w-[36px] rounded-full  h-[36px] bg-[#FDB804]"></button>
      ),
    },
    {
      id: 4,
      text: "3. I don’t need your help.",
      colorRed: (
        <button className="w-[36px] rounded-full  h-[36px] bg-[#FF0000]"></button>
      ),
      colorGreen: (
        <button className="w-[36px] rounded-full h-[36px] bg-[#039A00]"></button>
      ),
      colorYellow: (
        <button className="w-[36px] rounded-full  h-[36px] bg-[#FDB804]"></button>
      ),
    },
    {
      id: 5,
      text: "3. I don’t need your help.",
      colorRed: (
        <button className="w-[36px] rounded-full  h-[36px] bg-[#FF0000]"></button>
      ),
      colorGreen: (
        <button className="w-[36px] rounded-full h-[36px] bg-[#039A00]"></button>
      ),
      colorYellow: (
        <button className="w-[36px] rounded-full  h-[36px] bg-[#FDB804]"></button>
      ),
    },
    {
      id: 6,
      text: "6. You are determined",
      colorRed: (
        <button className="w-[36px] rounded-full  h-[36px] bg-[#FF0000]"></button>
      ),
      colorGreen: (
        <button className="w-[36px] rounded-full h-[36px] bg-[#039A00]"></button>
      ),
      colorYellow: (
        <button className="w-[36px] rounded-full  h-[36px] bg-[#FDB804]"></button>
      ),
    },
    {
      id: 7,
      text: "7. Great work!",
      colorRed: (
        <button className="w-[36px] rounded-full  h-[36px] bg-[#FF0000]"></button>
      ),
      colorGreen: (
        <button className="w-[36px] rounded-full h-[36px] bg-[#039A00]"></button>
      ),
      colorYellow: (
        <button className="w-[36px] rounded-full  h-[36px] bg-[#FDB804]"></button>
      ),
    },
    {
      id: 8,
      text: "8. What’s going on?.",
      colorRed: (
        <button className="w-[36px] rounded-full  h-[36px] bg-[#FF0000]"></button>
      ),
      colorGreen: (
        <button className="w-[36px] rounded-full h-[36px] bg-[#039A00]"></button>
      ),
      colorYellow: (
        <button className="w-[36px] rounded-full  h-[36px] bg-[#FDB804]"></button>
      ),
    },
    {
      id: 9,
      text: "9. I don’t have time for this.",
      colorRed: (
        <button className="w-[36px] rounded-full  h-[36px] bg-[#FF0000]"></button>
      ),
      colorGreen: (
        <button className="w-[36px] rounded-full h-[36px] bg-[#039A00]"></button>
      ),
      colorYellow: (
        <button className="w-[36px] rounded-full  h-[36px] bg-[#FDB804]"></button>
      ),
    },
    {
      id: 10,
      text: "10. I am smarter than you.",
      colorRed: (
        <button className="w-[36px] rounded-full  h-[36px] bg-[#FF0000]"></button>
      ),
      colorGreen: (
        <button className="w-[36px] rounded-full h-[36px] bg-[#039A00]"></button>
      ),
      colorYellow: (
        <button className="w-[36px] rounded-full  h-[36px] bg-[#FDB804]"></button>
      ),
    },
  ];
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
              return <SpotLightGame list={list} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
