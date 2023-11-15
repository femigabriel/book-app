import React from "react";
import { ArrowRightOutlined, CloseOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { QuitModal } from "@/components/modals/QuitModal";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

export const CharliesChoices1 = ({ onNextClick, onBackClick }: Props) => {
  return (
    <div className="readBook w-full lg:h-full">
      <header className="px-10 py-5 flex justify-between shadow-sm">
    
        <QuitModal />

        <Image
          width={17}
          height={19}
          src="/assets/icons/nextIcon.svg"
          className="w-[60px] h-[20px] cursor-pointer"
          alt="next-icon"
          onClick={onNextClick}
        />
      </header>
      <div className="flex justify-center item-center w-full h-screen px-5 mt-5">
        <div className="">
          <div className="text-[1em] lg:mb-10">
            <h1 className="font-bold text-[1.65em] ">Charlie's choice</h1>
            <h3 className="text-[#9B59B6] ]">Reflection</h3>
            <h4 className="">
              Let’s talk about some of the Relationship Skills that Charlie and
              her friends have in the story.
            </h4>
          </div>
          <div>
            <div className="w-full flex mb-5">
              <span>1.</span>
              <p className="border border-[#303030] border-t-0 border-x-0  w-full">
                “empathy” is when we care how others feel.
              </p>
            </div>
            <div className="w-full flex mb-5">
              <span>2.</span>
              <p className="border border-[#303030] border-t-0 border-x-0  w-full">
                “respect” means building people up even when they are different.
              </p>
            </div>
            <div className="w-full flex mb-5">
              <span>3.</span>
              <p className="border border-[#303030] border-t-0 border-x-0  w-full">
                to “compromise” is when we choose to let others have a say so.
              </p>
            </div>
            <div className="w-full flex mb-5">
              <span>4.</span>
              <p className="border border-[#303030] border-t-0 border-x-0  w-full">
                to “encourage” means being a cheerleader, telling a person not
                to give up.
              </p>
            </div>
            <div className="w-full flex mb-5">
              <span>5.</span>
              <p className="border border-[#303030] border-t-0 border-x-0  w-full">
                to “cooperate” is when we work together to accomplish one goal.
              </p>
            </div>
            <div className="w-full flex mb-5">
              <span>6.</span>
              <p className="border border-[#303030] border-t-0 border-x-0  w-full">
                to be a “good listener” means paying real attention to what the
                other person says and
              </p>
            </div>
            <div className="w-full flex mb-5">
              <span></span>
              <p className="border border-[#303030] border-t-0 border-x-0  w-full">
                how their faces looks (it means looking at things from their
                point of view).
              </p>
            </div>
            <div className="w-full flex mb-5">
              <span>7.</span>
              <p className="border border-[#303030] border-t-0 border-x-0  w-full">
                to be “considerate” means being helpful and kind it is a way of
                showcasing concern
              </p>
            </div>
            <div className="w-full flex mb-5">
              <span></span>
              <p className="border border-[#303030] border-t-0 border-x-0  w-full">
                for others.
              </p>
            </div>
          </div>
          {/* <Image
            width={18}
            height={20}
            src="/assets/images/choice1.svg"
            className="w-full h-[320px] book "
            alt="activity-card"
            draggable="false"
          /> */}
        </div>
      </div>
    </div>
  );
};
