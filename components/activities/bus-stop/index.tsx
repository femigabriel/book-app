import React, { useState } from "react";
import { BustopPage1 } from "./BustopPage1";
import { BusStop } from "./BusStop";
import { BustopPage2 } from "./BustopPage2";
import { BustopPage3 } from "./BustopPage3";

export default function BusStopPages() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const gotoNextBusStopPage = () => {
    setCurrentStepIndex((x) => x + 1);
  };

  const gotoPreviousBusStopPage = () => {
    setCurrentStepIndex((x) => x - 1);
  };

  const renderCurrentSelection = () => {
    switch (currentStepIndex) {
      case 0:
        return (
          <BusStop
            gotoNextBusStopePage={gotoNextBusStopPage}
            // onBackClick={gotoPreviousPage}
          />
        );
      case 1:
        return (
          <BustopPage1
            onNextClick={gotoNextBusStopPage}
            onBackClick={gotoPreviousBusStopPage}
          />
        );
      case 2:
        return (
          <BustopPage2
            onNextClick={gotoNextBusStopPage}
            onBackClick={gotoNextBusStopPage}
          />
        );
      case 3:
        return (
          <BustopPage3
            onNextClick={gotoNextBusStopPage}
            onBackClick={gotoNextBusStopPage}
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
  return <div className="">{renderCurrentSelection()}</div>;
}
