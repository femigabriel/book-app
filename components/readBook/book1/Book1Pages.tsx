import React from "react";
import Image from "next/image";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { ReadBookHeader } from "../ReadBookHeader";
import HTMLFlipBook from "react-pageflip";

export const Book1Pages = () => {

  const bookPages = [
    {
      id: 1,
      img: (
        <Image
          width={17}
          height={19}
          src="./assets/storybooks/book1/page2.svg"
          className="w-full px-10 h-full cursor-pointer book mb-5"
          alt="cover"
        />
      ),
      page: "1",
    },
    {
      id: 2,
      img: (
        <Image
          width={17}
          height={19}
          src="./assets/storybooks/book1/page3.svg"
          className="w-full px-10 h-full cursor-pointer book mb-5"
          alt="cover"
        />
      ),
      page: "2",
    },
    {
      id: 3,
      img: (
        <Image
          width={17}
          height={19}
          src="./assets/storybooks/book1/page4.svg"
          className="w-full px-10 h-full cursor-pointer book mb-5"
          alt="cover"
        />
      ),
      page: "3",
    },
    {
      id: 4,
      img: (
        <Image
          width={17}
          height={19}
          src="./assets/storybooks/book1/page5.svg"
          className="w-full px-10 h-full cursor-pointer book mb-5"
          alt="cover"
        />
      ),
      page: "4",
    },
    {
      id: 5,
      img: (
        <Image
          width={17}
          height={19}
          src="./assets/storybooks/book1/page6.svg"
          className="w-full px-10 h-full cursor-pointer book mb-5"
          alt="cover"
        />
      ),
      page: "5",
    },
    {
      id: 6,
      img: (
        <Image
          width={17}
          height={19}
          src="./assets/storybooks/book1/page7.svg"
          className="w-full px-10 h-full cursor-pointer book mb-5"
          alt="cover"
        />
      ),
      page: "6",
    },
    {
      id: 7,
      img: (
        <Image
          width={17}
          height={19}
          src="./assets/storybooks/book1/page8.svg"
          className="w-full px-10 h-full cursor-pointer book mb-5"
          alt="cover"
        />
      ),
      page: "7",
    },
    {
      id: 8,
      img: (
        <Image
          width={17}
          height={19}
          src="./assets/storybooks/book1/page9.svg"
          className="w-full px-10 h-full cursor-pointer book mb-5"
          alt="cover"
        />
      ),
      page: "8",
    },
    {
      id: 9,
      img: (
        <Image
          width={17}
          height={19}
          src="./assets/storybooks/book1/page10.svg"
          className="w-full px-10 h-full cursor-pointer book mb-5"
          alt="cover"
        />
      ),
      page: "9",
    },
    {
      id: 10,
      img: (
        <Image
          width={17}
          height={19}
          src="./assets/storybooks/book1//page11.svg"
          className="w-full px-10 h-full cursor-pointer book mb-5"
          alt="cover"
        />
      ),
      page: "10",
    },
    {
      id: 11,
      img: (
        <Image
          width={17}
          height={19}
          src="./assets/storybooks/book1/page12.svg"
          className="w-full px-10 h-full cursor-pointer book mb-5"
          alt="cover"
        />
      ),
      page: "11",
    },
    {
      id: 12,
      img: (
        <Image
          width={17}
          height={19}
          src="./assets/storybooks/book1/page13.svg"
          className="w-full px-10 h-full cursor-pointer book mb-5"
          alt="cover"
        />
      ),
      page: "12",
    },
    {
      id: 13,
      img: (
        <Image
          width={17}
          height={19}
          src="./assets/storybooks/book1/page14.svg"
          className="w-full px-10 h-full cursor-pointer book mb-5"
          alt="cover"
        />
      ),
      page: "13",
    },
    {
      id: 14,
      img: (
        <Image
          width={17}
          height={19}
          src="./assets/storybooks/book1/page15.svg"
          className="w-full px-10 h-full cursor-pointer book mb-5"
          alt="cover"
        />
      ),
      page: "14",
    },
    {
      id: 15,
      img: (
        <Image
          width={17}
          height={19}
          src="./assets/storybooks/book1/page16.svg"
          className="w-full px-10 h-full cursor-pointer book mb-5"
          alt="cover"
        />
      ),
      page: "15",
    },
    {
      id: 16,
      img: (
        <Image
          width={17}
          height={19}
          src="./assets/storybooks/book1/page17.svg"
          className="w-full px-10 h-full cursor-pointer book mb-5"
          alt="cover"
        />
      ),
      page: "16",
    },
    {
      id: 17,
      img: (
        <Image
          width={17}
          height={19}
          src="./assets/storybooks/book1/page18.svg"
          className="w-full px-10 h-full cursor-pointer book mb-5"
          alt="cover"
        />
      ),
      page: "17",
    },
    {
      id: 18,
      img: (
        <Image
          width={17}
          height={19}
          src="./assets/storybooks/book1/page19.svg"
          className="w-full px-10 h-full cursor-pointer book mb-5"
          alt="cover"
        />
      ),
      page: "18",
    },
    {
      id: 19,
      img: (
        <Image
          width={17}
          height={19}
          src="./assets/storybooks/book1/page20.svg"
          className="w-full px-10 h-full cursor-pointer book mb-5"
          alt="cover"
        />
      ),
      page: "19",
    },
    {
      id: 20,
      img: (
        <Image
          width={17}
          height={19}
          src="./assets/storybooks/book1/page21.svg"
          className="w-full px-10 h-full cursor-pointer book mb-5"
          alt="cover"
        />
      ),
      page: "20",
    },
    {
      id: 21,
      img: (
        <Image
          width={17}
          height={19}
          src="./assets/storybooks/book1/page22.svg"
          className="w-full px-10 h-full cursor-pointer book mb-5"
          alt="cover"
        />
      ),
      page: "21",
    },
  ];
  return (
    <div className="coverBook w-full h-screen">
      <ReadBookHeader />

      <div>
        {/* {bookPages.map((list) => {
          return (
            <div className="" key={list.id}>
              {list.img}
            </div>
          );
        })} */}
        <HTMLFlipBook width={300} height={500}>
          <div className="demoPage">Page 1</div>
          <div className="demoPage">Page 2</div>
          <div className="demoPage">Page 3</div>
          <div className="demoPage">Page 4</div>
        </HTMLFlipBook>
      </div>
    </div>
  );
};
