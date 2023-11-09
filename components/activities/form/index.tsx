import React, { useState } from "react";
import { NickNameForm } from "./NickNameForm";
import { CreateUniqueName } from "./CreateUniqueName";

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
          <CreateUniqueName onNextClick={gotoNext} onBackClick={gotoPrevious} />
        );
      // case 2:
      //   return (
      //     <BookPageFlipped onNextClick={gotoNext} onBackClick={gotoPrevious} />
      //   );
      // case 3:
      //   return (
      //     <BookPageCoverEnd onNextClick={gotoNext} onBackClick={gotoPrevious} />
      //   );
      default:
        return <NickNameForm onNextClick={gotoNext} />;
    }
  };
  return <div className="nicknameForm">{renderCurrentSelection()}</div>;
}
