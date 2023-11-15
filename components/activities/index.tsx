import React, { useState } from "react";
import { ActivitiesCard } from "./ActivitiesCards";
import { NickNameForm } from "./form/NickNameForm";
import { StorybookIntro } from "./StorybookIntro";
import { StoybookCovers } from "./StoybookCovers";

export const ActivitiesPage = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const gotoNext = () => {
    setCurrentStepIndex((x) => x + 1);
  };

  const gotoPrevious = () => {
    setCurrentStepIndex((x) => x - 1);
  };

  const renderCurrentSelection = () => {
    switch (currentStepIndex) {
      case 0:
        return <NickNameForm onNextClick={gotoNext} />;
  
      // default:
      //   return <NickNameForm onNextClick={gotoNext} />;
    }
  };
  return <div className="">{renderCurrentSelection()}</div>;
};
