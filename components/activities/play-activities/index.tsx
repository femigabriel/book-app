import React, { useState } from "react";
import { StoybookCovers } from "../StoybookCovers";
import { StorybookIntro } from "../StorybookIntro";


export default function ActivitiesPlay() {
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
        return (
          <StoybookCovers
            onNextClick={gotoNext}
            onBackClick={gotoPrevious}
          />
        );
      case 1:
        return (
            <StorybookIntro onNextClick={gotoNext} onBackClick={gotoPrevious} />
        );
 
      // default:
      //   return <ActivitiesCard  />;
    }
  };
  return <div className="">{renderCurrentSelection()}</div>;
}
