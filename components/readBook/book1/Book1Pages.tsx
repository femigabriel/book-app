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
          className="w-[680px] px-10 h-[488.355px] cursor-pointer book mb-5"
          alt="cover"
        />
      ),
      page: "1",
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
