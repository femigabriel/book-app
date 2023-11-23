import React, { useState } from "react";

interface Props {
  content?: string;
  busNumber: string;
}

export const BusStopCard = ({ list, setResult }: any) => {
  const [active, setActive] = useState("");

  const handleClick = (e: any) => {
    setActive(e);
    setResult(list.correctAns == e, list.id);
  };

  return (
    <div>
      <div className="text-[1em]">
        <div
          className="bus-stop flex-col flex text-center text-[#9B59B6] font-semibold"
          onClick={() => handleClick("true")}
          style={{
            backgroundColor: active == "true" ? "#9b59b6" : "",
            color: active == "true" ? "#fff" : "",
          }}
        >
          <span>Bus stops</span>
          <span>{list.busNumber}</span>
        </div>
        <div className="border border-[#9B59B6] rounded-[24px] w-[207px] h-[102px] z-10">
          <div className="flex justify-center text-center">
            <span className="w-[110px]">{list.content}</span>
          </div>
        </div>
        <div className="stick"></div>
      </div>
    </div>
  );
};
