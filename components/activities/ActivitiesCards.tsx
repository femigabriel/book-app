"use client";

import { ActivitiesHeader } from "@/components/activities/ActivitiesHeader";
import { BusStop } from "@/components/activities/bus-stop/BusStop";
import { Charlieschoice } from "@/components/activities/charlie'sChoice/Charlie'schoice";
import { PowerOfWords } from "@/components/activities/powerOfWords/PowerOfWords";
import { SpotLight } from "@/components/activities/spot-light/SpotLight";
import React from "react";
import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import Link from "next/link";
import Image from "next/image";
import { UserContext } from "@/context/user/UserContext";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/">
        Scores
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/">
        Leaderboard
      </a>
    ),
  },
];

const cards = [
  {
    id: 1,
    card: <Charlieschoice />,
  },
  {
    id: 2,
    card: <BusStop />,
  },
  {
    id: 3,
    card: <PowerOfWords />,
  },
  {
    id: 4,
    card: <SpotLight />,
  },
];

interface Props {
  // onNextClick: () => any;
  onBackClick: () => any;
}
export const ActivitiesCards = ({ onBackClick }: Props) => {
  const userContext = React.useContext(UserContext);
  const { state } = userContext;
  const userName = state?.userName;

  return (
    <div className="w-full readBook h-full lg:h-screen">
      {/* <ActivitiesHeader /> */}
      <header className="px-10 py-7 flex justify-between shadow-sm w-full ">
        <Link href="/activities" className="flex" onClick={onBackClick}>
          <Image
            src="/assets/icons/back.svg"
            width={12}
            height={13}
            className="w-[25px] h-full cursor-pointer logo"
            alt="logo"
          />
          <span className="mt-2 mx-2">Back</span>
        </Link>
        <div className="flex">
          <div className="flex cursor-pointer mx-5">
            <Image
              width={58}
              height={58}
              src="/assets/icons/avatarIcon.svg"
              className="w-[52px] h-[52px] cursor-pointer"
              alt="avatar"
            />
            <span className="mx-3 items-center flex justify-center">
              {userName}
            </span>
          </div>
          <Dropdown menu={{ items }} placement="bottom" arrow>
            <Image
              width={40}
              height={40}
              src="/assets/icons/downIcon.svg"
              className="w-[30px] h-[25px] mt-3 cursor-pointer"
              alt="down-icon"
            />
          </Dropdown>
        </div>
      </header>
      <div className="coverBook lg:my-5 my-5 lg:grid grid-cols-4 gap-5 px-20 lg:py-2 ">
        {cards.map((list) => {
          return (
            <div className="mb-5" key={list.id}>
              {list.card}
            </div>
          );
        })}
      </div>
    </div>
  );
};
