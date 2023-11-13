import React, { useState } from "react";
import { PowerOfWords } from "./PowerOfWords";
import { PowerOfWordsPage1 } from "./PowerOfWordsPage1";
import { PowerOfWordsPage2 } from "./PowerOfWordsPage2";

export default function PowerOfWordsPages() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const gotoNextPowerOfWordsPage = () => {
    setCurrentStepIndex((x) => x + 1);
  };

  const gotoPreviousPowerOfWordsPage = () => {
    setCurrentStepIndex((x) => x - 1);
  };

  const renderCurrentSelection = () => {
    switch (currentStepIndex) {
      case 0:
        return (
          <PowerOfWords gotoNextPowerOfWordsPage={gotoNextPowerOfWordsPage} />
        );
      case 1:
        return (
          <PowerOfWordsPage1
            onNextClick={gotoNextPowerOfWordsPage}
            onBackClick={gotoPreviousPowerOfWordsPage}
          />
        );
      case 2:
        return (
          <PowerOfWordsPage2
            onNextClick={gotoNextPowerOfWordsPage}
            onBackClick={gotoPreviousPowerOfWordsPage}
          />
        );

      default:
        return (
          <PowerOfWords gotoNextPowerOfWordsPage={gotoNextPowerOfWordsPage} />
        );
    }
  };
  return <div className="h-screen w-full">{renderCurrentSelection()}</div>;
}
