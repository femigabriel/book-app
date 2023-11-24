import { QuestionOptions } from "@/types/global";
import React, { useState } from "react";

export const CharlieschoiceOptions = ({ list, setResult }: any) => {
  const [selected, setSelected] = useState<QuestionOptions | undefined>();

  const handleOnClick = (item: QuestionOptions) => {
    setSelected(item);
  };
  return (
    <div
      style={{
        backgroundColor: list.id === selected?.id ? "#e1d1f6" : "",
      }}
      onClick={() => handleOnClick(list)}
      className="options flex gap-2 px-5 py-3 mb-3"
    >
      <span className="">{list.number}</span>
      <span className="">{list.text}</span>
    </div>
  );
};
