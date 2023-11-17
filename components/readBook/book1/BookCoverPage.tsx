import React from "react";
import Image from "next/image";
import HTMLFlipBook from "react-pageflip";


export const BookCoverPage = () => {
  return (
    <div className="flex h-screen lg:h-full my-10 book1 justify-center items-center">
      <Image
        width={300}
        height={300}
        src="/assets/illustrators/book-flip.png"
        className="w-full h-full mb-5 lg:h-[457px] lg:w-[680px] cursor-pointer mt-2"
        alt="avatar"
      />
    </div>
  );
};
