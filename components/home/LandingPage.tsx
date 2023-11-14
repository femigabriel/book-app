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
          <Link href="/read-book">
            <Image
              width={18}
              height={20}
              src="./assets/images/Frame3.svg"
              className="w-[225px] h-[168px] cursor-pointer"
              alt="card"
            />
          </Link>

          <Link href="/activities">
            <Image
              width={18}
              height={20}
              src="./assets/images/Frame1.svg"
              className="w-[225px] h-[168px] cursor-pointer"
              alt="card"
            />
          </Link>
          <Link href="/">
            <Image
              width={18}
              height={20}
              src="./assets/images/Frame2.svg"
              className="w-[225px] h-[168px] cursor-pointer"
              alt="card"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
