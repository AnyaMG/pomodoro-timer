import React, { useState } from "react";
import Break from "../Break";
import Focus from "../Focus";
import TimeLeft from "../TimeLeft";

function Pomodoro() {
  const [focusLength, setFocusLength] = useState(1500);
  const [sessionStarted, setSessionStarted] = useState(false);

  const handleSessionStarted = (session) => {
    setSessionStarted(session);
  }

  const decreaseFocusLengthByFiveMin = () => {
    const newFocusLength = focusLength - 300;
    if (newFocusLength < 300) {
      setFocusLength(300);
    } else {
      setFocusLength(focusLength - 300);
    }
  };
  
  const increaseFocusLengthByFiveMin = () => {
    const newFocusLength = focusLength + 300;

    if (newFocusLength > 3600) {
      setFocusLength(3600);
    } else {
      setFocusLength(focusLength + 300);
    }
  };

  // break length
  const [breakLength, setBreakLength] = useState(300);
  const decreaseBreakLengthByOneMin = () => {
    const newBreakLength = breakLength - 60;
    if (newBreakLength < 60) {
      setBreakLength(60);
    } else {
      setBreakLength(breakLength - 60);
    }
  };
  const increaseBreakLengthByOneMin = () => {
    setBreakLength(breakLength + 60);
  };

  return (
    <div className="pomodoro">
      <div className="row">
        <div className="col">
          <Focus
            focusLength={focusLength}
            decreaseFocusLengthByFiveMin={decreaseFocusLengthByFiveMin}
            increaseFocusLengthByFiveMin={increaseFocusLengthByFiveMin}
            disabled={sessionStarted}
          />
        </div>

        <TimeLeft
          breakLength={breakLength}
          focusLength={focusLength}
          handleSessionStarted={handleSessionStarted}
          session={sessionStarted}
        />
        <div className="col">
          <Break
            breakLength={breakLength}
            decreaseBreakLengthByOneMin={decreaseBreakLengthByOneMin}
            increaseBreakLengthByOneMin={increaseBreakLengthByOneMin}
            disabled={sessionStarted}
          />
          <div className="float-right"></div>
        </div>
      </div>
      <div className="row">
        <div className="col"></div>
      </div>
      <div>
        {/* TODO: This area should show only when a focus or break session is running or pauses */}
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) and total duration */}
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
     
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;
