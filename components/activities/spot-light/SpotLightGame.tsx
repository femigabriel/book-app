import React, { useState } from "react";

interface Props {
text: string,
colors: any
}
export const SpotLightGame = ({list}: any) => {
  const [active, setActive] = useState("");

  return (
    <div>
      <div className="flex w-full border border-[#333] b border-b-0 bg-[#F8F8F8] ">
        <div className="border border-[#333] border-y-0 border-l-0 px-5 py-1.5 w-full">
          <div>
            <span className="text-[0.85em] lg:text-[1em]">{list.text}</span>
          </div>
        </div>

        <div className="border border-[#333] border-y-0 border-x-0 flex gap-3 justify-center items-center px-5  w-full">
          <button
            onClick={() => setActive("green")}
            style={{
              opacity: active == "green" || active == "" ? 1 : 0.3,
            }}
            className="w-[30px] rounded-full  h-[30px] bg-[#039A00]"
          ></button>

          <button
            onClick={() => setActive("red")}
            style={{
              opacity: active == "red" || active == "" ? 1 : 0.3,
            }}
            className="w-[30px] rounded-full h-[30px] bg-[#FF0000]"
          ></button>

          <button
            onClick={() => setActive("yellow")}
            style={{
              opacity: active == "yellow" || active == "" ? 1 : 0.3,
            }}
            className="w-[30px] rounded-full  h-[30px] bg-[#FDB804]"
          ></button>
        </div>
      </div>
    </div>
  );
};
