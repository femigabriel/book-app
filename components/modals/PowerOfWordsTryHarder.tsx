import React, { useState } from "react";
import { Button, Input, Modal } from "antd";
import Image from "next/image";
import Link from "next/link";

interface Props {
  totalClick: any;
  totalResults: any;
}
export const PowerOfWordsTryHarder = ({ totalClick, totalResults }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Function to play the sound
  const playSound = () => {
    const audio = new Audio("/assets/sounds/756267__joseegn__ui_sound_return_1.wav"); 
    audio.play();
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    playSound()
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full">
      <div>
        <Image
          width={17}
          height={19}
          src="/assets/icons/finishIcon.svg"
          className="w-[60px] h-[20px] cursor-pointer"
          alt="next-icon"
          onClick={showModal}
        />
      </div>
      <Modal
        footer={null}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="flex justify-center">
          <div className="mt-5">
            <div className="flex justify-center items-center">
              <div className="">
                <h1 className="text-[2em] text-center"> Try harder</h1>
                <p className="text-center">
                
                  {totalClick} / 6
                </p>
                <div className="flex justify-center mt-5">
                  <Image
                    width={17}
                    height={19}
                    src="/assets/icons/missed.svg"
                    className="w-[70px] h-[70px] cursor-pointer"
                    alt="back-icon"
                    onClick={showModal}
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center py-5 pt-20">
              <Link href="/activities/activities-card">
                <button
                  className="bg-[#9B59B6] rounded-[24px] py-3 px-5 lg:px-16 text-white text-[1em] flex"
                  onClick={handleOk}
                >
                  <Image
                    width={17}
                    height={19}
                    src="/assets/icons/playIcon.svg"
                    className="w-[30px] h-[25px] cursor-pointer mr-2"
                    alt="back-icon"
                  />
                  <span>Retake</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
