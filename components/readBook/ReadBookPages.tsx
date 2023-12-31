import React from "react";
import { Header } from "../Header";
import Image from "next/image";
import Link from "next/link";

interface Props {
  onNextClick: () => any;
}

export const ReadBookPages = ({ onNextClick }: Props) => {
  return (
    <div className="readBook w-full">
      <Header />
      <div className="lg:px-24 px-5 ml- py-10 pt-28 ">
        <h3 className="text-[1.500em] pb-5">Books</h3>
        <div className="grid grid-cols-3 gap-5 booklist">
          <div className="flex flex-col">
            <Image
              width={17}
              height={19}
              src="/assets/images/book1.svg"
              className="w-[323px] h-[485px] cursor-pointer book"
              alt="book"
            />
            <Link href="/read-book/book" className="bookBtn mx-14 ">
              <button
                className="bg-[#9B59B6] w-[202px] h-[47px] text-[#F8F8F8] text-[0.85em] rounded-[24px]  my-5"
                // onClick={onNextClick}
              >
                Read Book
              </button>
            </Link>
          </div>

          {/* <div className="flex flex-col">
            <Image
              width={17}
              height={19}
              src="/assets/images/book2.svg"
              className="w-[323px] h-[485px] cursor-pointer book"
              alt="book"
            />
            <div className="mx-14 bookBtn">
              <button className="bg-[#9B59B6] w-[202px] h-[47px] text-[#F8F8F8] text-[0.85em] rounded-[24px]  my-5">
                Read Book
              </button>
            </div>
          </div>

          <div className="flex flex-col">
            <Image
              width={17}
              height={19}
              src="/assets/images/book2.svg"
              className="w-[323px] h-[485px] cursor-pointer book"
              alt="book"
            />
            <div className="mx-14 bookBtn">
              <button className="bg-[#9B59B6] w-[202px] h-[47px] text-[#F8F8F8] text-[0.85em] rounded-[24px]  my-5">
                Read Book
              </button>
            </div>
          </div> */}

          <div className="flex flex-col">
            <div className="book-cover">
              <div className="book-inner">
                <div className="flex justify-center items-center py-10 px-5">
                  <h3 className="text-[#303030] mt-20 lg:mt-44 mt font-semibold lg:text-3xl text-2xl text-center">
                    Charlie's Big Hack:
                    <br />
                    The Coder Club Challenge
                  </h3>
                </div>
              </div>
            </div>
            <div className="mx-14 bookBtn">
              <button className="bg-[#9B59B6] w-[202px] h-[47px] text-[#F8F8F8] text-[0.85em] rounded-[24px]  my-5">
                Read Book
              </button>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="book-cover">
              <div className="book-inner">
                <div className="flex justify-center items-center py-10 px-5">
                  <h3 className="text-[#303030] mt-20 lg:mt-44 mt font-semibold lg:text-3xl text-2xl text-center">
                    Charlie's Big Convention:
                    <br />
                    Anime Over Accessories
                  </h3>
                </div>
              </div>
            </div>
            <div className="mx-14 bookBtn">
              <button className="bg-[#9B59B6] w-[202px] h-[47px] text-[#F8F8F8] text-[0.85em] rounded-[24px]  my-5">
                Read Book
              </button>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="book-cover">
              <div className="book-inner">
                <div className="flex justify-center items-center py-10 px-5">
                  <h3 className="text-[#303030] mt-20 lg:mt-44 mt font-semibold lg:text-3xl text-2xl text-center">
                    Black Nails and Brave Notes:
                    <br />
                    The Punk Progidy's Rise
                  </h3>
                </div>
              </div>
            </div>
            <div className="mx-14 bookBtn">
              <button className="bg-[#9B59B6] w-[202px] h-[47px] text-[#F8F8F8] text-[0.85em] rounded-[24px]  my-5">
                Read Book
              </button>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="book-cover">
              <div className="book-inner">
                <div className="flex justify-center items-center py-10 px-5">
                  <h3 className="text-[#303030] mt-20 lg:mt-44 mt font-semibold lg:text-3xl text-2xl text-center">
                    Big Journey, True Heart:
                    <br />
                    The Path to Wellness Together
                  </h3>
                </div>
              </div>
            </div>
            <div className="mx-14 bookBtn">
              <button className="bg-[#9B59B6] w-[202px] h-[47px] text-[#F8F8F8] text-[0.85em] rounded-[24px]  my-5">
                Read Book
              </button>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="book-cover">
              <div className="book-inner">
                <div className="flex justify-center items-center py-10 px-5">
                  <h3 className="text-[#303030] mt-20 lg:mt-44 mt font-semibold lg:text-3xl text-2xl text-center">
                    Big Merge:
                    <br />
                    The Unlikely Family Mix-up
                  </h3>
                </div>
              </div>
            </div>
            <div className="mx-14 bookBtn">
              <button className="bg-[#9B59B6] w-[202px] h-[47px] text-[#F8F8F8] text-[0.85em] rounded-[24px]  my-5">
                Read Book
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
