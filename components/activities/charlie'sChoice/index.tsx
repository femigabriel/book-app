import React, { useState } from "react";
import { CharliesChoices1 } from "../charlie'sChoice/CharliesChoices1";
import { CharliesChoices2 } from "../charlie'sChoice/CharliesChoice2";
import { CharliesChoices3 } from "../charlie'sChoice/CharliesChoices3";
import { CharliesChoices4 } from "../charlie'sChoice/CharliesChoices4";
import { Charlieschoice } from "./Charlie'schoice";

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
          <Charlieschoice
            gotoNextChaliePage={gotoNextChaliePage}
            // onBackClick={gotoPreviousPage}
          />
        );
      case 1:
        return (
          <CharliesChoices1
            onNextClick={gotoNextChaliePage}
            onBackClick={gotoPreviousChaliePage}
          />
        );
      case 2:
        return (
          <CharliesChoices2
            onNextClick={gotoNextChaliePage}
            onBackClick={gotoPreviousChaliePage}
          />
        );
      case 3:
        return (
          <CharliesChoices3
            onNextClick={gotoNextChaliePage}
            onBackClick={gotoPreviousChaliePage}
          />
        );
      case 4:
        return (
          <CharliesChoices4
            onNextClick={gotoNextChaliePage}
            onBackClick={gotoPreviousChaliePage}
          />
        );

      default:
        return <Charlieschoice gotoNextChaliePage={gotoNextChaliePage} />;
    }
  };
  return <div className="">{renderCurrentSelection()}</div>;
}
