import React, { useState } from "react";
import { Input } from "antd";
import Link from "next/link";
import Image from "next/image";
import { UserContext } from "@/context/user/UserContext";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}
export const CreateUniqueNameForm = ({ onNextClick, onBackClick }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const userContext = React.useContext(UserContext);
  const { state } = userContext;
  const userName = state?.userName;
  const Useremail = state?.userEmail;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!name) {
      setError(true);
      return;
    }
    // onNextClick();
    e.preventDefault();
  };
  return (
    <div className=" flex justify-center items-center h-screen">
      <form action="" onSubmit={handleSubmit} className="formgroup px-20 py-10">
        <div className="flex cursor-pointer mb-5" onClick={onBackClick}>
          <Image
            width={24}
            height={24}
            src="/assets/icons/back.svg"
            className="w-[24px] h-[24px] mr-2"
            alt="back-icon"
          />
          <span>Back</span>
        </div>
        <h3 className="text-[1.500em] text-center my-7">
          Your Nickname is your Passcode
        </h3>
        <div className="flex flex-col mb-5">
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
          <div className="flex justify-between">
            <span></span>
            {error && name.length <= 0 ? (
              <label className="text-[#F13737] text-[0.750em]">
                Nickname already exist
              </label>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="" className="text-[0.850em] mb-2">
            Email
          </label>
          <Input
            placeholder="Enter your email address"
            onChange={(e) => setEmail(e.target.value)}
            pattern="^\S+@\S+\.\S+$"
            type="email"
            className=" h-[44px] w-full bg-[#F8F8F8] border-[#D9D9D9] rounded-[8px] border-2 text-[0.725em] px-5"
          />
          <div className="flex justify-between">
            <span></span>
            {error && email.length <= 0 ? (
              <label className="text-[#F13737] text-[0.750em]">
                This field is required
              </label>
            ) : (
              ""
            )}
          </div>
        </div>

        {/* <div className="my-2 flex justify-between">
          <Link href="/">
            <span className="text-[#9B59B6] text-[0.85em]">
              Already have a nickname?
            </span>
          </Link>
        </div> */}

        <div className="flex justify-center items-center mt-14">
          <Link href="/activities/play-activities" className="w-full">
            <button className="bg-[#9B59B6] rounded-[24px] text-[#FDFDFF] w-full px-[12px] py-[11px]">
              Play activities
            </button>
          </Link>
        </div>
        <div className="flex justify-center items-center mt-3 text-[0.85em]">
          <span> Already have a nickname?</span>
          <Link href="/activities/play-activities">
            <span className="text-[#9B59B6] mx-3">Play activities</span>
          </Link>
        </div>
      </form>
    </div>
  );
};
