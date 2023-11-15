import React, { useState } from "react";
import { Button, Input, Modal } from "antd";
import Image from "next/image";
import Link from "next/link";

export const ScorePointsModal = () => {
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
              <div>
                <h1 className="text-[2em] text-center"> Amazing!</h1>
                <p>300/300</p>
                <Image
                  width={17}
                  height={19}
                  src="/assets/icons/grommet-icons_status-good.svg"
                  className="w-[70px] h-[70px] cursor-pointer"
                  alt="back-icon"
                  onClick={showModal}
                />
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
