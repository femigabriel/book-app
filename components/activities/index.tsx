import React, { useState } from "react";
import { NickNameForm } from "./form/NickNameForm";
import { StorybookIntro } from "./StorybookIntro";
import { StoybookCovers } from "./StoybookCovers";
import { ActivitiesCards } from "./ActivitiesCards";

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

      case 1:
        return (
          <StoybookCovers onNextClick={gotoNext} onBackClick={gotoPrevious} />
        );
      case 2:
        return (
          <StorybookIntro onNextClick={gotoNext} onBackClick={gotoPrevious} />
        );
      case 3:
        return <ActivitiesCards onBackClick={gotoPrevious} />;
    }
  };
  return <div className="">{renderCurrentSelection()}</div>;
};
