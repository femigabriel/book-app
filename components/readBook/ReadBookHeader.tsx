import React from "react";
import { DownOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

export const ReadBookHeader = () => {
  return (
    <div className=" h-[96px]">
      <header className="px-10 py-7 flex justify-between ">
        <Link href="/read-book" className="flex cursor-pointer">
          <Image
            width={17}
            height={19}
            src="./assets/icons/back.svg"
            className="w-[24px] h-[24px] mr-3"
            alt="back-icon"
          />
          <span className="text-[1em]">Back</span>
        </Link>

        <div className="flex">
          <div className="flex cursor-pointer">
            <Image
              width={17}
              height={19}
              src="./assets/icons/exclaIcon.svg"
              className="w-[20px] h-[20px] cursor-pointer mt-2"
              alt="avatar"
            />
            <span className="mx-2 flex items-center  text-[0.750em] text-[#9B59B6]">
              Tap on the book pages to flip
            </span>
          </div>
        </div>
      </header>
    </div>
  );
};
