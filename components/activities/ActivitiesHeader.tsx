import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import Link from "next/link";
import Image from "next/image";
import { UserContext } from "@/context/user/UserContext";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/score">
        Scores
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/leaderboard">
        Leaderboard
      </a>
    ),
  },
];

export const ActivitiesHeader = () => {
  const userContext = React.useContext(UserContext);
  const { state } = userContext;
  const userName = state?.userName;
  console.log({ userName });

  return (
    <div className="w-full h-[96px] fixed bg-[#e1d1f6]  top-0 ">
      <header className="px-10 py-7 flex justify-between shadow-sm w-full ">
        <Link href="/activities/activities-card" className="flex">
          <Image
            src="/assets/icons/back.svg"
            width={12}
            height={13}
            className="w-[25px] h-full cursor-pointer logo"
            alt="logo"
          />
          <span className="mt-2 mx-3">Back</span>
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
    </div>
  );
};
