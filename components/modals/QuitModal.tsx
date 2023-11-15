import React, { useState } from "react";
import { Button, Input, Modal } from "antd";
import Image from "next/image";
import Link from "next/link";

export const QuitModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
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
          src="/assets/icons/quitIcon.svg"
          className="w-[68px] h-[25px] cursor-pointer"
          alt="back-icon"
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
              <Image
                width={17}
                height={19}
                src="/assets/icons/head.svg"
                className="w-[70px] h-[70px] cursor-pointer"
                alt="back-icon"
                onClick={showModal}
              />
            </div>
            <h1 className="text-[2em]"> Do you really want to quit?</h1>

            <div className="w-full flex justify-between py-5 pt-20">
              <Link href="/activities/activities-card">
                <button
                  className="bg-[#9B59B6] rounded-[24px] lg:h-[47px] px-5 lg:px-16 text-white text-[1em]"
                  onClick={handleOk}
                >
                  Yes
                </button>
              </Link>

              <button
                className="bg-[#AED5F2] rounded-[24px] lg:h-[47px] px-5 lg:px-16 text-white text-[1em]"
                onClick={handleCancel}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
