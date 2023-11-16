import React, { useState } from "react";
import { PowerOfWords } from "./PowerOfWords";
import { PowerOfWordsPage1 } from "./PowerOfWordsPage1";
import { PowerOfWordsPage2 } from "./PowerOfWordsPage2";
import { SpotLightPage1 } from "../spot-light/SpotLightPage1";
import { SpotLightPage2 } from "../spot-light/SpotLightPage2";
import { SpotLightPage3 } from "../spot-light/SpotLightPage3";

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
          <PowerOfWordsPage1
            onNextClick={gotoNextPowerOfWordsPage}
            onBackClick={gotoPreviousPowerOfWordsPage}
          />
        );
      case 1:
        return (
          <PowerOfWordsPage2
            onNextClick={gotoNextPowerOfWordsPage}
            onBackClick={gotoPreviousPowerOfWordsPage}
          />
        );
      
      //   default:
      //     return (
      //       <CharliesChoices1
      //         onNextClick={gotoNextChaliePage}
      //         onBackClick={gotoPreviousChaliePage}
      //       />
      //     );
    }
  };
  return <div className="h-screen w-full">{renderCurrentSelection()}</div>;
}
