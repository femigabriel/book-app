import React, { useState } from "react";
import { SpotLight } from "./SpotLight";
import { SpotLightPage1 } from "./SpotLightPage1";
import { SpotLightPage2 } from "./SpotLightPage2";
import { SpotLightPage3 } from "./SpotLightPage3";
import { SpotLightPage4 } from "./SpotLightPage4";

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
        return (
          <SpotLightPage1
            onNextClick={gotoNextSpotLightPages}
            onBackClick={gotoPreviousSpotLightPages}
          />
        );
      case 1:
        return (
          <SpotLightPage2
            onNextClick={gotoNextSpotLightPages}
            onBackClick={gotoPreviousSpotLightPages}
          />
        );
      case 2:
        return (
          <SpotLightPage3
            onNextClick={gotoNextSpotLightPages}
            onBackClick={gotoPreviousSpotLightPages}
          />
        );
      case 3:
        return (
          <SpotLightPage4
            onNextClick={gotoNextSpotLightPages}
            onBackClick={gotoPreviousSpotLightPages}
          />
        );

      default:
        return (
          <SpotLight
          //  gotoNextSpotLightPages={gotoNextSpotLightPages}
          />
        );
    }
  };

  return (
    <div className="h-full lg:h-screen w-full">{renderCurrentSelection()}</div>
  );
}
