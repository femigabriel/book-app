import React from "react";
import { ActivitiesHeader } from "./ActivitiesHeader";
import Image from "next/image";
import ChalieschoicePages from "./charlie'sChoice";
import BusStopPages from "./bus-stop";
import PowerOfWordsPages from "./powerOfWords";
import SpotLightPages from "./spot-light";
import { Charlieschoice } from "./charlie'sChoice/Charlie'schoice";
import { SpotLight } from "./spot-light/SpotLight";
import { PowerOfWords } from "./powerOfWords/PowerOfWords";
import { BusStop } from "./bus-stop/BusStop";


const cards = [
  {
    id: 1,
    card: <Charlieschoice />,
  },
  {
    id: 2,
    card: <BusStop />,
  },
  {
    id: 3,
    card: <PowerOfWords />,
  },
  {
    id: 4,
    card: <SpotLight />,
  },
];
export const ActivitiesCard = () => {
  return (
    <div className="coverBook grid grid-cols-4 gap-3 px-20 lg:h-screen py-10 lg:py-20">
      {cards.map((list) => {
        return (
          <div className="" key={list.id}>
            {list.card}
          </div>
        );
      })}
    </div>
  );
};
