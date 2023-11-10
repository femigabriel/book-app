import React, { useState } from "react";
import { NickNameForm } from "../NickNameForm";
import { StoybookCovers } from "./StoybookCovers";
import { StorybookIntro } from "../StorybookIntro";
import { ActivitiesCard } from "../ActivitiesCards";
import { CharliesChoices1 } from "../CharliesChoices1";
import { CharliesChoices2 } from "../CharliesChoice2";
import { CharliesChoices3 } from "../CharliesChoices3";

export default function Form() {
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
        return (
          <ActivitiesCard onNextClick={gotoNext} onBackClick={gotoPrevious} />
        );
      case 4:
        return (
          <CharliesChoices1 onNextClick={gotoNext} onBackClick={gotoPrevious} />
        );
      case 5:
        return (
          <CharliesChoices2 onNextClick={gotoNext} onBackClick={gotoPrevious} />
        );
      case 6:
        return (
          <CharliesChoices3 onNextClick={gotoNext} onBackClick={gotoPrevious} />
        );
      default:
        return <NickNameForm onNextClick={gotoNext} />;
    }
  };
  return <div className="">{renderCurrentSelection()}</div>;
}
