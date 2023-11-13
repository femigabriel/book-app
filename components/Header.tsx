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

  //   <nav className="">
  //   <li className="py-3 text-[1em]">
  //     <Link href="/">Home</Link>
  //   </li>
  //   <li className="py-2 text-[1em]">
  //     <Link href="/read-book">Read Book</Link>
  //   </li>
  //   <li className="py-2 text-[1em]">
  //     <Link href="/activities">Activities</Link>
  //   </li>
  //   <li className="py-2 text-[1em]">
  //     <Link href="/purchase-book">purchase Books</Link>
  //   </li>
  //   <li className="py-2 text-[1em]">
  //     <Link href="/leaderboard">Leaderboard</Link>
  //   </li>
  //   <li className="py-2 text-[1em]">
  //     <Link href="/store">How it Works</Link>
  //   </li>

  //   <li className="py-2 text-[1em]">
  //     <Link href="/store">About</Link>
  //   </li>
  // </nav>

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
          <Link href="/read-book">How it Works</Link>
        </li>
      ),
      key: "4",
    },
    {
      label: (
        <li className=" text-[1.2em]">
          <Link href="/read-book">About</Link>
        </li>
      ),
      key: "5",
    },
    
  ];

  return (
    <div className="">
      <header className=" fixed top-0 w-full header shadow-sm">
        <nav className="container  py-3">
          <div className="flex justify-between">
            <Link href="/">
              <Image
                src="./assets/icons/logo.svg"
                width={131}
                height={101}
                className="w-full h-full cursor-pointer logo"
                alt="logo"
              />
            </Link>

            <div className="mt-5">
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
