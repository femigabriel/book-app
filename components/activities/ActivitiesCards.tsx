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

const activitiesCard = [
  {
    id: 0,
    card: <Charlieschoice  />
  },
  {
    id: 2,
    card: <BusStop />
  },
  {
    id: 3,
    card: <PowerOfWords />
  },
  {
    id: 4,
    card: <SpotLight />
  },
]

export const ActivitiesCard = () => {
  return (
    <div className="coverBook h-full">

      <div className="grid grid-cols-4 gap-3 lg:pt-20 activities-card px-24">
   {activitiesCard?.map((list, index) => {
            return (
              <div className="" key={index}>
                {list.card}
                </div>
            );
          })}
      </div>
      
    </div>
  );
};
