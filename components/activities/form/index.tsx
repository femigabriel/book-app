import React, { useState } from "react";
import { CreateUniqueNameForm } from "./CreateUniqueNameForm";
import { CreateUniqueNameAvatar } from "./CreateUniqueNameAvatar";
import ActivitiesCard from "@/app/activities/activities-card/page";
import { StoybookCovers } from "../StoybookCovers";
import { StorybookIntro } from "../StorybookIntro";

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
        return (
          <CreateUniqueNameAvatar
            onNextClick={gotoNext}
            onBackClick={gotoPrevious}
          />
        );
      case 1:
        return (
          <CreateUniqueNameForm
            onNextClick={gotoNext}
            onBackClick={gotoPrevious}
          />
        );

      case 2:
        return (
          <StoybookCovers onNextClick={gotoNext} onBackClick={gotoPrevious} />
        );
        case 3:
          return (
              <StorybookIntro onNextClick={gotoNext} onBackClick={gotoPrevious} />
          );
      // default:
      //   return (
      //     <CreateUniqueNameAvatar
      //       onNextClick={gotoNext}
      //       onBackClick={gotoPrevious}
      //     />
      //   );
    }
  };
  return <div className="">{renderCurrentSelection()}</div>;
}
