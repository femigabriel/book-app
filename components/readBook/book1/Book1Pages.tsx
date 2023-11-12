import React from "react";
import Image from "next/image";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { ReadBookHeader } from "../ReadBookHeader";

export const book1Pages = () => {
  const bookPages = [
    {
      id: 1,
      img: (
        <Image
          width={17}
          height={19}
          src="./assets/images/Property 1=Variant2.svg"
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
          src="./assets/images/Property 1=Variant4.svg"
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
          src="./assets/images/Property 1=Variant5.svg"
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
          src="./assets/images/Property 1=Variant6.svg"
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
          src="./assets/images/Property 1=Variant7.svg"
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
          src="./assets/images/Property 1=Variant8.svg"
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
          src="./assets/images/Property 1=Variant9.svg"
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
          src="./assets/images/Property 1=Variant10.svg"
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
          src="./assets/images/Property 1=Variant11.svg"
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
          src="./assets/images/Property 1=Variant12.svg"
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
          src="./assets/images/Property 1=Variant13.svg"
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
          src="./assets/images/Property 1=Variant14.svg"
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
          src="./assets/images/Property 1=Variant15.svg"
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
          src="./assets/images/Property 1=Variant16.svg"
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
          src="./assets/images/Property 1=Variant17.svg"
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
          src="./assets/images/Property 1=Variant18.svg"
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
          src="./assets/images/Property 1=Variant19.svg"
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
          src="./assets/images/Property 1=Variant20.svg"
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
          src="./assets/images/Property 1=Variant21.svg"
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
          src="./assets/images/Property 1=Variant23.svg"
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
          src="./assets/images/Property 1=Variant24.svg"
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
    </div>
  );
};

// import React from "react";
// import Image from "next/image";
// import { LeftOutlined, RightOutlined } from "@ant-design/icons";
// import { ReadBookHeader } from "../ReadBookHeader";

// interface Props {
//   onNextClick: () => any;
//   onBackClick: () => any;
// }

// export const ook1Cover = ({ onNextClick, onBackClick }: Props) => {
//   return (
//     <div className="coverBook w-full h-screen">
//       <ReadBookHeader />
//       <div className="flex justify-between items-center cover px-5">
//         <LeftOutlined onClick={onBackClick} className="w cursor-pointer" />
//         <div className="flex w-full items-center bookBackcover">
//           <Image
//             width={17}
//             height={19}
//             src="./assets/images/Property 1=Variant2.svg"
//             className="w-[680px] px-10 h-[488.355px] cursor-pointer book mb-5"
//             alt="cover"
//             onClick={onNextClick}
//           />
//         </div>

//         <RightOutlined onClick={onNextClick} className="w cursor-pointer" />
//       </div>
//     </div>
//   );
// };
