import React, { useState } from "react";
import { ActivitiesCard } from "../ActivitiesCards";
import { CreateUniqueNameForm } from "./CreateUniqueNameForm";
import { CreateUniqueNameAvatar } from "./CreateUniqueNameAvatar";

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

      case 3:
        return <ActivitiesCard />;
      default:
        return (
          <CreateUniqueNameAvatar
            onNextClick={gotoNext}
            onBackClick={gotoPrevious}
          />
        );
    }
  };
  return <div className="">{renderCurrentSelection()}</div>;
}
