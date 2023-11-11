import React from "react";
import { ActivitiesHeader } from "./ActivitiesHeader";
import Image from "next/image";
import ChalieschoicePages from "./charlie'sChoice";
import BusStopPages from "./bus-stop";
import PowerOfWordsPages from "./powerOfWords";
import SpotLightPages from "./spot-light";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

export const ActivitiesCard = () => {
  return (
    <div className="coverBook">
      {/* <ActivitiesHeader /> */}
      <div className="flex justify-center ">
        <div className="w-full">
          <ChalieschoicePages />
          <BusStopPages />
          <PowerOfWordsPages />
          <SpotLightPages />
        </div>
      </div>
    </div>
  );
};
