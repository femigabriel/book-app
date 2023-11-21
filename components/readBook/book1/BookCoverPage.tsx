import React from "react";
import Image from "next/image";
import HTMLFlipBook from "react-pageflip";


export const BookCoverPage = () => {
  return (
    // <div className="flex  book1 justify-center items-center">
    //   <Image
    //     width={300}
    //     height={300}
    //     src="/assets/illustrators/book-flip.png"
    //     className="w-full h-full mb-5 lg:h-[457px] lg:w-[680px] cursor-pointer mt-2"
    //     alt="avatar"
    //   />
    // </div>
    <div className="lg:flex shadow-md rounded-md bg-white cursor-pointer my-5 h-full lg:h-[457px] w-full cover">
    <div className="bg-[#E1D1F6 coverBook w-full flex justify-center items-center">
     <Image
        width={300}
        height={300}
        src="/assets/illustrators/book-flip.png"
        className="w-full h-full mb-5 lg:h-[457px] lg:w-[680px] cursor-pointer mt-2"
        alt="avatar"
      />
    </div>
    <div className="w-full px-5 mb-5 lg:px-20 py-7 text-md flex items-center justify-center leading-8 bg-[#e1d1f]">
      <div className="text-center">
        <p>Charlie’s Big Gift
By
Sabreen S-Straker</p>
      </div>
    </div>
    
  </div>
  );
};
