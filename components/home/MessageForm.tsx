import React from "react";
import { Input } from "antd";

const { TextArea } = Input;
const onChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  console.log(e);
};

export const MessageForm = () => {
  return (
    <div className="flex justify-center w-full">
      <div>
        <h3 className="text-[1.4em] text-center my-12 mt-16">
          We are a message away from you
        </h3>
        <form
          action=""
          // onSubmit={(event) => event.preventDefault()}
          className="my-10 w-[527px] messageForm"
        >
          <div className="flex w-full mb-5">
            <label htmlFor="" className="mt-2 mr-3">
              Name:
            </label>
            <Input
              placeholder="Enter your name"
              className=" h-[44px] w-full border-[#D9D9D9] border-2 text-[0.725em] messageInput"
            />
          </div>
          <div className="flex w-full mb-5 ">
            <label htmlFor="" className="mt-2 mr-3">
              Email:
            </label>
            <Input
              placeholder="Enter your email address"
              className=" h-[44px] w-full border-[#D9D9D9] border-2 text-[0.725em] messageInput"
            />
          </div>
          <TextArea
            className="h-[169px] w-full border-[#D9D9D9] border-2 text-[0.725em] messageInput"
            placeholder="Write a message"
            allowClear
            onChange={onChange}
          />
          <button className="bg-[#9B59B6] w-[202px] h-[47px] text-[#F8F8F8] text-[0.85em] rounded-[24px] float-right my-5 messagebtn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
