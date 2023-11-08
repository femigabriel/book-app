import React, { useState } from "react";
import { Button, Drawer } from "antd";
import Link from "next/link";
import Image from "next/image";
import { MenuOutlined, RightOutlined } from "@ant-design/icons";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <header className="px-5 py-5 flex justify-between h-[96px] header">
        <Image
          src="./assets/icons/logo.svg"
          width={131}
          height={101}
          className="w-[91px] h-[71px] cursor-pointer logo"
          alt="logo"
        />
        {/* <Image
          src="./assets/icons/menuIcon.svg"
          width={57}
          height={85}
          onClick={showDrawer}
          className="w-[47px] h-[65px] cursor-pointer menuIcon"
          alt="menu"
        /> */}
        <MenuOutlined
          className="w-[47px] text-[#303030] text-[24px] cursor-pointer menuIcon"
          onClick={showDrawer}
        />
      </header>
      <Drawer
        // title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <nav className="">
          <li className="py-3 text-[1em]">
            <Link href="/">Home</Link>
          </li>
          <li className="py-2 text-[1em]">
            <Link href="/read-book">Read Book</Link>
          </li>
          <li className="py-2 text-[1em]">
            <Link href="/activities">Activities</Link>
          </li>
          <li className="py-2 text-[1em]">
            <Link href="/store">Store</Link>
          </li>
        </nav>
      </Drawer>
    </div>
  );
};
