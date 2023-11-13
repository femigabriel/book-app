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

const cards = [
  {
    id: 1,
    card: <ChalieschoicePages />,
  },
  {
    id: 2,
    card: <BusStopPages />,
  },
  {
    id: 3,
    card: <PowerOfWordsPages />,
  },
  {
    id: 4,
    card: <SpotLightPages />,
  },
];
export const ActivitiesCard = () => {
  return (
    <div className="coverBook flex justify-center items-center px-20">
      {/* <ActivitiesHeader /> */}
      {/* <div className="flex justify-center ">
        <div className="w-full">
          <ChalieschoicePages />
          <BusStopPages />
          <PowerOfWordsPages />
          <SpotLightPages />
        </div>
      </div> */}
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
