import React, { useState } from "react";
import { Input } from "antd";
import Link from "next/link";
import Image from "next/image";
import { PaymentPlanList } from "@/types/global";
import { UserContext } from "@/context/user/UserContext";

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
        src="/assets/images/avatar1.svg"
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
        src="/assets/images/avatar4.svg"
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
        src="/assets/images/avatar3.svg"
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
        src="/assets/images/avatar5.svg"
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
        src="/assets/images/avatar2.svg"
        className="w-[90px] h-[90px] cursor-pointer rounded-full"
        alt="forward-icon"
      />
    ),
  },

  {
    id: 5,
    img: (
      <Image
        width={17}
        height={19}
        src="/assets/images/avatar6.svg"
        className="w-[90px] h-[90px] cursor-pointer rounded-full"
        alt="forward-icon"
      />
    ),
  },
  {
    id: 6,
    img: (
      <Image
        width={17}
        height={19}
        src="/assets/images/avatar7.svg"
        className="w-[90px] h-[90px] cursor-pointer rounded-full"
        alt="forward-icon"
      />
    ),
  },
  {
    id: 7,
    img: (
      <Image
        width={17}
        height={19}
        src="/assets/images/avatar8.svg"
        className="w-[90px] h-[90px] cursor-pointer rounded-full"
        alt="forward-icon"
      />
    ),
  },
  {
    id: 8,
    img: (
      <Image
        width={17}
        height={19}
        src="/assets/images/avatar9.svg"
        className="w-[90px] h-[90px] cursor-pointer rounded-full"
        alt="forward-icon"
      />
    ),
  },
  {
    id: 9,
    img: (
      <Image
        width={17}
        height={19}
        src="/assets/images/avatar10.svg"
        className="w-[90px] h-[90px] cursor-pointer rounded-full"
        alt="forward-icon"
      />
    ),
  },
];

export const CreateUniqueNameAvatar = ({ onNextClick, onBackClick }: Props) => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [selected, setSelected] = useState<PaymentPlanList | undefined>();

  const userContext = React.useContext(UserContext);
  const { state } = userContext;
  const avatar = state?.avatar;

  const handleOnClick = (item: PaymentPlanList) => {
    setSelected(item);
  };
  const handleSubmit = () => {
    if (selected === undefined) {
      return;
    }
    userContext.dispatch({ type: "setAvatar", payload: name });
    onNextClick();
  };

  return (
    <div className=" flex justify-center items-center h-screen">
      <div className="formgroup px-20 py-10">
        <div className="flex cursor-pointer" onClick={onBackClick}>
          <Image
            width={24}
            height={24}
            src="/assets/icons/back.svg"
            className="w-[24px] h-[24px] mr-2"
            alt="back-icon"
          />
          <span>Back</span>
        </div>
        <h3 className="text-[1.500em] text-center my-7">
          Your Nickname is your Passcode
        </h3>
        <p className="text-[1.000em] text-center">
          Choose an Avater to continue
        </p>
        <div className="mt-20">
          <p className="text-[0.850em] mb-2">Choose an Avater</p>
          {/* <div className="w-full border-dashed border-2 border-[#D9D9D9] h-[122px]  gap-[10px] flex flex-nowrap overflow-x-scroll">
            {items.map((list) => {
              return (
                <div
                  key={list.id}
                 className="w-full"
                  onClick={onNextClick}
                >
                  {list.img}
                </div>
              );
            })}
          </div> */}
          <div className="flex w-full lg:w-[546px] flex-row overflow-x-scroll space-x-5  p-4 mx-14 mt-5 border-dashed border-2 border-[#D9D9D9] h-[122px] avatar-list">
            <Image
              width={17}
              height={19}
              src="/assets/images/avatar1.svg"
              className="w-[90px] h-[90px] cursor-pointer rounded-full"
              alt="forward-icon"
            />
            <Image
              width={17}
              height={19}
              src="/assets/images/avatar4.svg"
              className="w-[90px] h-[90px] cursor-pointer rounded-full"
              alt="forward-icon"
            />
            <Image
              width={17}
              height={19}
              src="/assets/images/avatar3.svg"
              className="w-[90px] h-[90px] cursor-pointer rounded-full"
              alt="forward-icon"
            />
            <Image
              width={17}
              height={19}
              src="/assets/images/avatar5.svg"
              className="w-[90px] h-[90px] cursor-pointer rounded-full"
              alt="forward-icon"
            />
            <Image
              width={17}
              height={19}
              src="/assets/images/avatar2.svg"
              className="w-[90px] h-[90px] cursor-pointer rounded-full"
              alt="forward-icon"
            />
            <Image
              width={17}
              height={19}
              src="/assets/images/avatar6.svg"
              className="w-[90px] h-[90px] cursor-pointer rounded-full"
              alt="forward-icon"
            />
            <Image
              width={17}
              height={19}
              src="/assets/images/avatar7.svg"
              className="w-[90px] h-[90px] cursor-pointer rounded-full"
              alt="forward-icon"
            />
            <Image
              width={17}
              height={19}
              src="/assets/images/avatar8.svg"
              className="w-[90px] h-[90px] cursor-pointer rounded-full"
              alt="forward-icon"
            />
            <Image
              width={17}
              height={19}
              src="/assets/images/avatar9.svg"
              className="w-[90px] h-[90px] cursor-pointer rounded-full"
              alt="forward-icon"
            />
            <Image
              width={17}
              height={19}
              src="/assets/images/avatar10.svg"
              className="w-[90px] h-[90px] cursor-pointer rounded-full"
              alt="forward-icon"
            />
            ,
          </div>
          <div className="mt-10">
            <div className="bg-[#303030] h-[1px] w-full"></div>
            <div className="flex justify-center items-center mt-3 text-[0.85em]">
              <span>Already have a nickname?</span>
              <Link href="/activities/play-activities">
                <span className="text-[#9B59B6] mx-3">Play activities</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
