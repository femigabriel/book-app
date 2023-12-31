import React from "react";
import { MessageForm } from "./MessageForm";
import Image from "next/image";

// const features = [
//   {
//     id: 1,
//     title: "Interactive reading",
//     description:
//       " Immerse yourself in the heartwarming story with our interactive book that mimic the feel of a physical book.",
//     img: (
//       <Image
//       width={18}
//       height={20}
//         src="../src/assets/images/features1.svg"
//         className="w-[413.94px] h-[245.871px]"
//         alt="features-1"
//       />
//     ),
//   },
//   {
//     id: 2,
//     title: "Engaging activities",
//     description:
//       " Dive into a curated selection of interactive games and activities tied to the narrative, encouraging curiosity and exploration",
//     img: (
//       <Image
//       width={18}
//       height={20}
//         src="../src/assets/images/features2.svg"
//         className="w-[413.94px] h-[245.871px]"
//         alt="features-2"
//       />
//     ),
//   },
//   {
//     id: 1,
//     title: "Easy Access to the Book",
//     description:
//       " Own a physical copy of 'your favorite books' with a direct link to purchase on Amazon, readily available for your convenience.",
//     img: (
//       <Image
//               width={18}
//               height={20}
//         src="../src/assets/images/features3.svg"
//         className="w-[413.94px] h-[245.871px]"
//         alt="features-3"
//       />
//     ),
//   },
// ];

export const Feautures = () => {
  return (
    <div className="flex justify-center w-full bg-[#F8F8F8] features ">
      <div className="">
        <h3 className="text-[1.5em] text-center my-12 mt-16">
          One platform, multiple Function
        </h3>
        <div className=" w-full ">
          <div className="flex justify- gap-[80px] my-10 w-full features ">
            <div className="py-14 feat-content">
              <h3 className="text-[1.2em]">Interactive reading</h3>
              <p className="w-[24em] text-[0.85em] leading-6">
                Immerse yourself in the heartwarming story with our interactive
                book that mimic the feel of a physical book.
              </p>
            </div>
            <Image
              width={18}
              height={20}
              src="./assets/images/features5.svg"
              className="w-[413.94px] h-[245.871px]"
              alt="features-1"
            />
          </div>
          <div className="flex justify- gap-[80px] my-10 w-full features-1">
            <Image
              width={18}
              height={20}
              src="./assets/images/features6.svg"
              className="w-[413.94px] h-[245.871px]"
              alt="features-2"
            />
            <div className="py-20 feat-content">
              <h3 className="text-[1.2em]">Engaging activities</h3>
              <p className="w-[24em] text-[0.85em] leading-6">
                Dive into a curated selection of interactive games and
                activities tied to the narrative, encouraging curiosity and
                exploration
              </p>
            </div>
          </div>
          <div className="flex justify- gap-[80px] my-10 w-full features">
            <div className="py-12 feat-content">
              <h3 className="text-[1.2em]">Easy Access to the Book</h3>
              <p className="w-[24em] text-[0.85em] leading-6">
                {/* Own a physical copy of 'your favorite books' with a direct link */}
                to purchase on Amazon, readily available for your convenience.
              </p>
            </div>
            <Image
              width={18}
              height={20}
              src="./assets/images/features7.svg"
              className="w-[413.94px] h-[245.871px]"
              alt="features-3"
            />
          </div>
          <div className="flex justify- gap-[80px] my-10 w-full features-1">
            <Image
              width={18}
              height={20}
              src="./assets/images/features8.svg"
              className="w-[413.94px] h-[245.871px]"
              alt="features-4"
            />
            <div className="py-20 feat-content">
              <h3 className="text-[1.2em]">Focusing on Personal Growth</h3>
              <p className="w-[24em] text-[0.85em] leading-6">
                Discover a space dedicated to social emotional learning,
                designed to foster personal development and inclusivity
              </p>
            </div>
          </div>
        </div>
        <MessageForm />
      </div>
    </div>
  );
};
