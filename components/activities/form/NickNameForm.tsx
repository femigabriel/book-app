import React, { useState } from "react";
import { Input } from "antd";
import Link from "next/link";
import { UserContext } from "@/context/user/UserContext";

interface Props {
  onNextClick: () => any;
}

export const NickNameForm = ({ onNextClick }: Props) => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const userContext = React.useContext(UserContext);
  const { state } = userContext;
  const userName = state?.userName;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!name) {
      setError(true);
      return;
    }
    userContext.dispatch({ type: "setUserName", payload: name });
    onNextClick();
  };

  return (
    <div className="nicknameForm">
      <div className=" flex justify-center items-center h-screen">
        <form
          action=""
          onSubmit={handleSubmit}
          className="formgroup px-20 py-10"
        >
          <h3 className="text-[1.80em] text-center my-7">
            Your Nickname is your Passcode
          </h3>
          <div className="flex flex-col">
            <label htmlFor="" className="text-[0.850em] mb-2">
              Enter Nickname
            </label>
            <Input
              placeholder="Your unique nickname"
              onChange={(e) => setName(e.target.value)}
              // pattern="^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)"
              type="text"
              className=" h-[44px] w-full bg-[#F8F8F8] border-[#D9D9D9] rounded-[8px] border-2 text-[0.725em] px-5"
            />
          </div>
          <div className="my-2 flex justify-between">
            <Link href="/">
              <span className="text-[#9B59B6] text-[0.85em]">
                Forgot nickname?
              </span>
            </Link>
            {error && name.length <= 0 ? (
              <label className="text-[#F13737] text-[0.750em]">
                *Nickname not found
              </label>
            ) : (
              ""
            )}
          </div>
          <div className="flex justify-center items-center mt-14">
            {/* <Link href="activities/play-activities" className="w-full"> */}
              <button className="bg-[#9B59B6] rounded-[24px] text-[#FDFDFF] w-full px-[12px] py-[11px]">
                Continue
              </button>
            {/* </Link> */}
          </div>
          <div className="flex justify-center items-center mt-3 text-[0.85em]">
            <span>Don’t have a nickname?</span>
            <Link href="activities/create-unique-name">
              <span className="text-[#9B59B6] mx-3">Create one</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
