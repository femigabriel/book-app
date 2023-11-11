import React, { useState } from "react";
import { NickNameForm } from "../NickNameForm";
import { StoybookCovers } from "./StoybookCovers";
import { StorybookIntro } from "../StorybookIntro";
import { ActivitiesCard } from "../ActivitiesCards";
import { CharliesChoices1 } from "../charlie'sChoice/CharliesChoices1";
import { CharliesChoices2 } from "../charlie'sChoice/CharliesChoice2";
import { CharliesChoices3 } from "../charlie'sChoice/CharliesChoices3";
import { CharliesChoices4 } from "../charlie'sChoice/CharliesChoices4";
import ChalieschoicePages from "../charlie'sChoice";

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
          <ActivitiesCard  />
        );
      // case 4:
      //   return (
      //     <ChalieschoicePages />
      //   );
      // case 5:
      //   return (
      //     <CharliesChoices2 onNextClick={gotoNext} onBackClick={gotoPrevious} />
      //   );
      // case 6:
      //   return (
      //     <CharliesChoices3 onNextClick={gotoNext} onBackClick={gotoPrevious} />
      //   );
      // case 7:
      //   return (
      //     <CharliesChoices4 onNextClick={gotoNext} onBackClick={gotoPrevious} />
      //   );
      default:
        return <NickNameForm onNextClick={gotoNext} />;
    }
  };
  return <div className="">{renderCurrentSelection()}</div>;
}
