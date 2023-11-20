import React, { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import Link from "next/link";
import Image from "next/image";
import { UserContext } from "@/context/user/UserContext";




export const ActivitiesHeader = () => {


  const [open, setOpen] = useState(false);

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    if (e.key === "3") {
      setOpen(false);
    }
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
          <Link href="/store">Purchase Book</Link>
        </li>
      ),
      key: "3",
    },
    {
      label: (
        <li className=" text-[1.2em]">
          <Link href="/">Leaderboard</Link>
        </li>
      ),
      key: "4",
    },
  ];




  const userContext = React.useContext(UserContext);
  const { state } = userContext;
  const userName = state?.userName;
  console.log({ userName });

  return (
    <div className="w-full h-[96px] fixed bg-[#e1d1f6]  top-0 ">
      <header className="px-10 py-7 flex justify-between shadow-sm w-full ">
        <Link href="/" className="">
          <Image
            src="/assets/icons/logo.svg"
            width={131}
            height={101}
            className="w-full h-full cursor-pointer logo"
            alt="logo"
          />
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
          <div className="">
            {open ? (
              <div>
                <Dropdown
                  menu={{
                    items,
                    onClick: handleMenuClick,
                  }}
                  onOpenChange={handleOpenChange}
                  open={open}
                  trigger={["click"]}
                >
                  <Space>
                    <CloseOutlined
                      onClick={() => setOpen(false)}
                      className=" text-[#303030] text-[34px] cursor-pointer menuIcon"
                    />
                  </Space>
                </Dropdown>
              </div>
            ) : (
              <MenuOutlined
                onClick={() => setOpen(true)}
                className=" text-[#303030] text-[34px] cursor-pointer menuIcon"
              />
            )}
          </div>
        </div>
      </header>
    </div>
  );
};
