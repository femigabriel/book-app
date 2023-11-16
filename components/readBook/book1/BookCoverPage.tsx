import React from "react";
import Image from "next/image";

export const BookCoverPage = () => {
  return (
    <div className="flex justify-center items-center">
      <Image
        width={300}
        height={300}
        src="/assets/illustrators/cover.png"
        className="w-full h-full lg:h-[437px] lg:w-[680px] cursor-pointer mt-2"
        alt="avatar"
      />
    </div>
  );
};
