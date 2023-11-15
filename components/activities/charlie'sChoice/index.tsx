import React, { useState } from "react";
import { CharliesChoices1 } from "../charlie'sChoice/CharliesChoices1";
import { CharliesChoices2 } from "../charlie'sChoice/CharliesChoice2";
import { CharliesChoices4 } from "../charlie'sChoice/CharliesChoices4";


export default function ChalieschoicePages() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const gotoNextChaliePage = () => {
    setCurrentStepIndex((x) => x + 1);
  };

  const gotoPreviousChaliePage = () => {
    setCurrentStepIndex((x) => x - 1);
  };

  const renderCurrentSelection = () => {
    switch (currentStepIndex) {
      case 0:
        return (
          <CharliesChoices1
            onNextClick={gotoNextChaliePage}
            onBackClick={gotoPreviousChaliePage}
          />
        );
      case 1:
        return (
          <CharliesChoices2
            onNextClick={gotoNextChaliePage}
            onBackClick={gotoPreviousChaliePage}
          />
        );
      case 2:
        return (
          <CharliesChoices4
            onNextClick={gotoNextChaliePage}
            onBackClick={gotoPreviousChaliePage}
          />
        );
    
      default:
        return (
          <CharliesChoices1
            onNextClick={gotoNextChaliePage}
            onBackClick={gotoPreviousChaliePage}
          />
        );
    }
  };

  return <div className="">{renderCurrentSelection()}</div>;
}
