import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}
export const PowerOfWordsPage2 = ({ onNextClick, onBackClick }: Props) => {
  return (
    <div className="readBook w-full h-screen ">
      <header className="px-10 py-7 flex justify-between shadow-sm">
        <Image
          width={17}
          height={19}
          src="/assets/icons/prevIcon.svg"
          className="w-[70.19px] h-[34px] cursor-pointer"
          alt="back-icon"
          draggable="false"
          onClick={onBackClick}
        />

        <Link href="/activities/activities-card">
          <Image
            width={17}
            height={19}
            src="/assets/icons/finishIcon.svg"
            className="w-[60px] h-[20px] cursor-pointer"
            alt="next-icon"
            // onClick={onNextClick}
          />
        </Link>
      </header>
      <div className="flex justify-center item-center px-20 my-5 ">
        <div className="flex w-full bg-white shadow-md">
          <div className="border px-5 leading-10 py-10 w-full">
            <nav>
              <li className="flex gap-3">
                <span>1.</span>
                <span>give up</span>
              </li>
              <li className="flex gap-3">
                <span>2.</span>
                <span>nice try</span>
              </li>
              <li className="flex gap-3">
                <span>3.</span>
                <span>fearless</span>
              </li>
              <li className="flex gap-3">
                <span>4.</span>
                <span>give up</span>
              </li>
              <li className="flex gap-3">
                <span>5.</span>
                <span>don't have a meltdown</span>
              </li>
              <li className="flex gap-3">
                <span>6.</span>
                <span>she is uncontrollable</span>
              </li>
              <li className="flex gap-3">
                <span>7.</span>
                <span>confidence</span>
              </li>
              <li className="flex gap-3">
                <span>8</span>
                <span>don't worry</span>
              </li>
              <li className="flex gap-3">
                <span>9.</span>
                <span>take care</span>
              </li>
              <li className="flex gap-3">
                <span>10.</span>
                <span>kind</span>
              </li>
            </nav>
          </div>
          <div className="border px-5 leading-10 py-10 w-full l">
            <nav>
              <li className="flex gap-3">
                <span>11.</span>
                <span>Its going to be okay</span>
              </li>
              <li className="flex gap-3">
                <span>12.</span>
                <span>time to panic</span>
              </li>
              <li className="flex gap-3">
                <span>13.</span>
                <span>stay hopeful</span>
              </li>
              <li className="flex gap-3">
                <span>14.</span>
                <span>everything will be fine</span>
              </li>
              <li className="flex gap-3">
                <span>15.</span>
                <span>your room is in chaos</span>
              </li>
              <li className="flex gap-3">
                <span>16.</span>
                <span>don't smirk</span>
              </li>
              <li className="flex gap-3">
                <span>17.</span>
                <span>worried</span>
              </li>
              <li className="flex gap-3">
                <span>18</span>
                <span>you tried</span>
              </li>
              <li className="flex gap-3">
                <span>19.</span>
                <span>that's what good friends are for</span>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
