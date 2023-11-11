import React, { useState } from "react";
import { SpotLight } from "./SpotLight";

export default function SpotLightPages() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const gotoNextSpotLightPages = () => {
    setCurrentStepIndex((x) => x + 1);
  };

  const gotoPreviousSpotLightPages = () => {
    setCurrentStepIndex((x) => x - 1);
  };

  const renderCurrentSelection = () => {
    switch (currentStepIndex) {
      case 0:
        return <SpotLight gotoNextSpotLightPages={gotoNextSpotLightPages} />;
      //   case 1:
      //     return (
      //       <PowerOfWordsPage1
      //         onNextClick={gotoNextPowerOfWordsPage}
      //         onBackClick={gotoPreviousPowerOfWordsPage}
      //       />
      //     );
      //   case 2:
      //     return (
      //       <PowerOfWordsPage2
      //         onNextClick={gotoNextPowerOfWordsPage}
      //         onBackClick={gotoPreviousPowerOfWordsPage}
      //       />
      //     );

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
