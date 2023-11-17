import React from "react";
import Image from "next/image";

export const BookLastPage = () => {
  return (
    <div className="flex h- lg:h-full book1 justify-center items-center">
      <Image
        width={300}
        height={300}
        src="/assets/illustrators/backcover2.png"
        // className="w-full h-full lg:h-[66vh] cursor-pointer mt-2"
        className="w-full h-full mb-5 lg:h-[76vh] lg:w-[55%] cursor-pointer mt-2"
        alt="cover-page"
      />
    </div>
  );
};
