"use client";

import { ActivitiesHeader } from "@/components/activities/ActivitiesHeader";
import { BusStop } from "@/components/activities/bus-stop/BusStop";
import { Charlieschoice } from "@/components/activities/charlie'sChoice/Charlie'schoice";
import { PowerOfWords } from "@/components/activities/powerOfWords/PowerOfWords";
import { SpotLight } from "@/components/activities/spot-light/SpotLight";
import React from "react";

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
export default function ActivitiesCard() {
  return (
    <div className="w-full readBook h-full lg:h-screen">
      <ActivitiesHeader />
      <div className="coverBook lg:my-10 mt-20 lg:grid grid-cols-4 gap-5 px-20 lg:h-screen py-10 lg:py-20 ">
        {cards.map((list) => {
          return (
            <div className="my-5" key={list.id}>
              {list.card}
            </div>
          );
        })}
      </div>
    </div>
  );
}
