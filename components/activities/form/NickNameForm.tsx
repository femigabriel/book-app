import React from "react";
import { Input } from "antd";
import Link from "next/link";

export default function NickNameForm() {
  return (
    <div className=" flex justify-center items-center h-screen">
      <form action="" className="formgroup px-20 py-10">
        <h3 className="text-[1.500em] text-center my-7">
          Your Nickname is your Passcode
        </h3>
        <div className="flex flex-col">
          <label htmlFor="" className="text-[0.850em] mb-2">
            Enter Nickname
          </label>
          <Input
            placeholder="Your unique nickname"
            type="text"
            className=" h-[44px] w-full bg-[#F8F8F8] border-[#D9D9D9] rounded-[8px] border-2 text-[0.725em]"
          />
        </div>
        <div className="my-2">
          <Link href="/">
            <span className="text-[#9B59B6] text-[0.85em]">
              Forgot nickname?
            </span>
          </Link>
        </div>
        <div className="flex justify-center items-center mt-14">
          <button className="bg-[#9B59B6] rounded-[24px] text-[#FDFDFF] w-full px-[12px] py-[11px]">
            Continue
          </button>
        </div>
        <div className="flex justify-center items-center mt-3 text-[0.85em]">
          <span>Don’t have a nickname?</span>
          <Link href="/">
            <span className="text-[#9B59B6] mx-3">Create one</span>
          </Link>
        </div>
      </form>
    </div>
  );
}
