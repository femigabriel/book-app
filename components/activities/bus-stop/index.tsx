import React, { useState } from "react";
import { BustopPage1 } from "./BustopPage1";
import { BusStop } from "./BusStop";

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
      //   case 2:
      //     return (
      //       <CharliesChoices2
      //         onNextClick={gotoNextChaliePage}
      //         onBackClick={gotoPreviousChaliePage}
      //       />
      //     );
      //   case 3:
      //     return (
      //       <CharliesChoices3
      //         onNextClick={gotoNextChaliePage}
      //         onBackClick={gotoPreviousChaliePage}
      //       />
      //     );
      //   case 4:
      //     return (
      //       <CharliesChoices4
      //         onNextClick={gotoNextChaliePage}
      //         onBackClick={gotoPreviousChaliePage}
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
  return <div className="">{renderCurrentSelection()}</div>;
}
