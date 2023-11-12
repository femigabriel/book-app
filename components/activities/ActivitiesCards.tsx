import React from "react";
import { ActivitiesHeader } from "./ActivitiesHeader";
import Image from "next/image";
import ChalieschoicePages from "./charlie'sChoice";
import BusStopPages from "./bus-stop";
import PowerOfWordsPages from "./powerOfWords";
import SpotLightPages from "./spot-light";
import { Charlieschoice } from "./charlie'sChoice/Charlie'schoice";
import { BusStop } from "./bus-stop/BusStop";
import { PowerOfWords } from "./powerOfWords/PowerOfWords";
import { SpotLight } from "./spot-light/SpotLight";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

export const ActivitiesCard = () => {
  return (
    <div className="coverBook h-full">
      {/* <ActivitiesHeader /> */}
      {/* <div className="lg:flex justify-center lg:px-10"> */}
      <div className="grid grid-cols-4 gap-3 booklist lg:px-10">
        <Charlieschoice />
        <BusStop />
        <PowerOfWords />
        <SpotLight />
        
        {/* <div className="w-full mx-5">
       <div className="flex gap-5">
       <div className="flex gap-5">
       <ChalieschoicePages />

          <BusStopPages />
       </div>
         <div className="flex gap-5">
         <PowerOfWordsPages />
          <SpotLightPages />
         </div>
       </div>
        </div> */}
      </div>
    </div>
  );
};
