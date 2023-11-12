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
      <div className="grid grid-cols-4 gap-3 lg:pt-5 activities-card px-24">
     
       <Charlieschoice />
        <BusStop />
        <PowerOfWords />
        <SpotLight />
     
      </div>
    </div>
  );
};
