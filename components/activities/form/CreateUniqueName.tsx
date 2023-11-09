import React, { useState } from "react";
import { Input } from "antd";
import Link from "next/link";
import Image from "next/image";
import { PaymentPlanList } from "@/types/global";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}
const items: PaymentPlanList[] = [
  {
    id: 0,
    img: (
      <Image
        width={17}
        height={19}
        src="./assets/images/avatar1.svg"
        className="w-[90px] h-[90px] cursor-pointer rounded-full"
        alt="forward-icon"
      />
    ),
  },
  {
    id: 1,
    img: (
      <Image
        width={17}
        height={19}
        src="./assets/images/avatar4.svg"
        className="w-[90px] h-[90px] cursor-pointer rounded-full"
        alt="forward-icon"
      />
    ),
  },
  {
    id: 2,
    img: (
      <Image
        width={17}
        height={19}
        src="./assets/images/avatar3.svg"
        className="w-[90px] h-[90px] cursor-pointer rounded-full"
        alt="forward-icon"
      />
    ),
  },
  {
    id: 3,
    img: (
      <Image
        width={17}
        height={19}
        src="./assets/images/avatar5.svg"
        className="w-[90px] h-[90px] cursor-pointer rounded-full"
        alt="forward-icon"
      />
    ),
  },
  {
    id: 4,
    img: (
      <Image
        width={17}
        height={19}
        src="./assets/images/avatar2.svg"
        className="w-[90px] h-[90px] cursor-pointer rounded-full"
        alt="forward-icon"
      />
    ),
  },
];

// export default function CreateUniqueName() {
export const CreateUniqueName = ({ onNextClick, onBackClick }: Props) => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [selected, setSelected] = useState<PaymentPlanList | undefined>();

  const handleOnClick = (item: PaymentPlanList) => {
    setSelected(item);
  };

  return (
    <div className=" flex justify-center items-center h-screen">
      <div className="formgroup px-20 py-10">
        <h3 className="text-[1.500em] text-center my-7">
          Your Nickname is your Passcode
        </h3>
        <p className="text-[1.000em] text-center">
          Choose an Avater to continue
        </p>
        <div className="mt-20">
          <p className="text-[0.850em] mb-2">Choose an Avater</p>
          <div className="w-full border-dashed border-2 border-[#D9D9D9] h-[122px] flex justify-center items-center gap-[10px]">
            {items.map((list) => {
              return (
                <div
                  key={list.id}
                  style={{
                    borderColor: list.id === selected?.id ? "blue" : "",
                  }}
                  onClick={() => handleOnClick(list)}
                >
                  {list.img}
                </div>
              );
            })}
          </div>
          <div className="mt-10">
            <div className="bg-[#303030] h-[1px] w-full"></div>
            <div className="flex justify-center items-center mt-3 text-[0.85em]">
              <span>Already have a nickname?</span>
              <Link href="/">
                <span className="text-[#9B59B6] mx-3">Play activities</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
