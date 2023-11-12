import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

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

  return (
    <div className="">
      <header className=" fixed top-0 w-full header shadow-sm">
        <nav className="container mx-auto px-5 py-3">
          <div className="flex justify-between">
            <Link href="/" className="my-2">
              <Image
                src="./assets/icons/logo.svg"
                width={131}
                height={101}
                className="w-[91px] h-[71px] cursor-pointer logo"
                alt="logo"
              />
            </Link>

            <div className="my-5">
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
                  <MenuOutlined className="w-[47px] text-[#303030] text-[24px] cursor-pointer menuIcon" />
                </div>
              </Dropdown>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
