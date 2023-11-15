import React from "react";
import { Header } from "../Header";
import Image from "next/image";
import Link from "next/link";

export const LandingPage = () => {
  return (
    <div className="bg-[#EEE0FF] w-full h-screen landingPage pt-32">
      <div className="px-10 pt-10">
        <div className="text-[#9B59B6]">
          <h1 className="text-[1.792em] w-[12em] font-medium leading-[42px] mb-3">
            Three Paths Social Emotional Learning.
          </h1>
          <p className="text-[1em] w-[24em]">
            A platform with a unique blend of Reading and Activities, Inspired
            by Charlie’s Big Gift.
          </p>
        </div>
        <div className="flex gap-5 mt-20 lists">
          <div className="bg-[#CB4242] page-link-card px-3 py-5 ">
            <h3 className="text-white text-center uppercase text-[1em] mb-3">
              books
            </h3>
            <button className="w-full h-[47px] bg-[#B20606] text-[#F8F8F8] text-[0.75em] rounded-[24px] shadow-md">
              <Link href="/read-book">Read Bok</Link>
            </button>
          </div>

          <div className="bg-[#9B59B6] page-link-card px-3 py-5 ">
            <h3 className="text-white text-center uppercase text-[1em] mb-3">
              activities
            </h3>
            <button className="w-full h-[47px] bg-[#8722B0] text-[#F8F8F8] text-[0.75em] rounded-[24px] shadow-md">
              <Link href="/activities">Read Bok</Link>
            </button>
          </div>

          <div className="bg-[#3C5EB8] page-link-card px-3 py-5 ">
            <h3 className="text-white text-center uppercase text-[1em] mb-3">
              store
            </h3>
            <button className="w-full h-[47px] bg-[#123EB4] text-[#F8F8F8] text-[0.75em] rounded-[24px] shadow-md">
              <Link href="/store">Read Bok</Link>
            </button>
          </div>
        
        </div>
      </div>
    </div>
  );
};
