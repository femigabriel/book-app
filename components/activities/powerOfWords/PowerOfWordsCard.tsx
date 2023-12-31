import React, { useState } from "react";

interface Props {
  text: string;
  id: number;
}

export const PowerOfWordsCard = ({ list, setResult }: any) => {
  const [active, setActive] = useState("");

  const handleClick = (e: any) => {
    setActive(e);
    setResult(list.correctAns == e, list.id);
  };

  

  return (
    <div className=" lg:leading-10 leading-6 w-full lg:text-[1em] text-[0.85em]">
      <div className="flex gap-3 px-5 cursor-pointer">
        <span>{list.number}</span>
        <span
          onClick={() => handleClick("true")}
          style={{
            textDecoration: active == "true" ? "line-through" : "",
          }}
        >
          {list.text}
        </span>
      </div>
    </div>
  );
};
