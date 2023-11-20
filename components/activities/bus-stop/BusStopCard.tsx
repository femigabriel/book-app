import React, { useState } from "react";

interface Props {
  content?: string;
  busNumber: string;
  //   id: number
}

export const BusStopCard = (props: Props) => {
  const [active, setActive] = useState("");

  return (
    <div>
      <div className="text-[1em]">
        <div
          className="bus-stop flex-col flex text-center text-[#9B59B6] font-semibold"
          onClick={() => setActive("green")}
          style={{
            backgroundColor: active == "green" ? "#9b59b6" : "",
            color: active == "green" ? "#fff" : "",
          }}
        >
          <span>Bus stops</span>
          <span>{props.busNumber}</span>
        </div>
        <div className="border border-[#9B59B6] rounded-[24px] w-[207px] h-[102px] z-10">
          <div className="flex justify-center text-center">
            <span className="w-[110px]">{props.content}</span>
          </div>
        </div>
        <div className="stick"></div>
      </div>
    </div>

    // <div>
    //   <div
    //     className="hexagons cursor-pointer ml-8"
    //     onClick={() => setActive("green")}
    //     style={{
    //       backgroundColor: active == "green" ? "#9b59b6" : "",
    //       color: active == "green" ? "#fff" : "",
    //     }}
    //   ></div>
    //   <div className="flex flex-col relative bottom-[100px] left-[80px] text-[1em]">
    //     <span className="">Bus stops</span>
    //     <span>1</span>
    //   </div>
    //   <div className="text-[1em]">
    //     <div className="border border-[#9B59B6] rounded-[24px] w-[207px] h-[102px] ">
    //       <div className="flex justify-center text-center">
    //         <span className="w-[110px]">{props.content}</span>
    //       </div>
    //     </div>
    //     <div className="stick"></div>
    //   </div>
    // </div>
  );
};
