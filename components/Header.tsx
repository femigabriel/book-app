import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { UserContext } from "@/context/user/UserContext";

export const Header = () => {
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
          <Link href="/">Leaderboard</Link>
        </li>
      ),
      key: "3",
    },
    {
      label: (
        <li className=" text-[1.2em]">
          <Link href="/">How it Works</Link>
        </li>
      ),
      key: "4",
    },
    {
      label: (
        <li className=" text-[1.2em]">
          <Link href="/">About</Link>
        </li>
      ),
      key: "5",
    },
  ];

  const userContext = React.useContext(UserContext);
  const { state } = userContext;
  const userName = state?.userName;

  return (
    <div className="">
      <header className=" fixed bg-[#e1d1f6]  top-0 w-full header shadow-sm">
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

            <div className="mt-5">
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
        </nav>
      </header>
    </div>
  );
};
