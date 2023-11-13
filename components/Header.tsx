import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { UserContext } from "@/context/user/UserContext";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const [active, setActive] = useState(false);

  // const showDrawer = () => {
  //   setOpen(true);
  // };

  const onClose = () => {
    setOpen(true);
  };

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    // if (e.key === "3") {
    //   setOpen(false);
    // }
    setOpen(false);
  };
  const handleClick = () => {
    // setActive(!active);
    setClose(true);
  };

  const handleOpenChange = (flag: boolean) => {
    setOpen(flag);
  };


  const items: MenuProps["items"] = [
    {
      label: (
        <li className=" text-[1.2em]">
          <Link href="/read-book">Read Book</Link>
        </li>
      ),
      key: "1",
    },
    {
      label: (
        <li className=" text-[1.2em]">
          <Link href="/activities">Activities</Link>
        </li>
      ),
      key: "2",
    },
    {
      label: (
        <li className=" text-[1.2em]">
          <Link href="/read-book">Leaderboard</Link>
        </li>
      ),
      key: "3",
    },
    {
      label: (
        <li className=" text-[1.2em]">
          <Link href="/how-it-works">How it Works</Link>
        </li>
      ),
      key: "4",
    },
    {
      label: (
        <li className=" text-[1.2em]">
          <Link href="/about">About</Link>
        </li>
      ),
      key: "5",
    },
    // {
    //   label: (
    //     <li className=" text-[1em]">
    //       <Link href="/read-book">Purchase Book</Link>
    //     </li>
    //   ),
    //   key: "6",
    // },
  ];

  
  const userContext = React.useContext(UserContext)
  const { state } = userContext
  const userName = state?.userName
  console.log({ userName })




  return (
    <div className="">
      <header className=" fixed top-0 w-full header shadow-sm">
        <nav className="container py-3">
          <div className="flex justify-between">
            <Link href="/" className="">
              <Image
                src="./assets/icons/logo.svg"
                width={131}
                height={101}
                className="w-full h-full cursor-pointer logo"
                alt="logo"
              />
            </Link>

            <div className="my-5 lg:mr-5 flex">
            <div className="flex cursor-pointer h-[] w-[198px]">
            <Image
                 width={58}
                 height={58}
              src="./assets/icons/avatarIcon.svg"
              className="w-[48px] h-[48px] cursor-pointer"
              alt="avatar"
            />
            <span className="mx-3 items-center flex justify-center">
            {userName}
            </span>
          </div>
              <Dropdown
                menu={{
                  items,
                  onClick: handleMenuClick,
                }}
                onOpenChange={handleOpenChange}
                open={open}
                trigger={['click']}
              >
                <div className="flex">
                  <MenuOutlined className="w-[47px] text-[#303030] text-[34px] cursor-pointer menuIcon" />
                </div>
              </Dropdown>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
