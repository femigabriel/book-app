import React, { useState } from "react";

export const QuestionOptions = ({ list }: any) => {
  const [active, setActive] = useState("");

  return (
    <div>
      <div
        // key={list.id}
        // onClick={() => handleClick(list)}
        // style={{ backgroundColor: isSelected(list) ? '#D9D9D9' : '' }}
    
        onClick={() => setActive("green")}
        style={{
            backgroundColor: active == "green" ? "" : "#D9D9D9",
        }}
        className="options flex gap-2 px-5 py-3 mb-3"
      >
        <span className="">{list.numb}</span>
        <span className="">{list.text}</span>
      </div>
    </div>
  );
};
