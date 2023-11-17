import React from "react";
import Image from "next/image";

export const BookOpeningPage = () => {
  return (
    <div className="flex h- lg:h-full book1 justify-center items-center">
      <Image
        width={300}
        height={300}
        src="/assets/storybooks/book1/page2.svg"
        className="w-full h-full mb-5 lg:h-[457px] lg:w-[680px] cursor-pointer mt-2"
        alt="avatar"
      />
    </div>
  );
};
