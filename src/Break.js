import React from "react";
import { secondsToDuration } from "./utils/duration";

const Break = ({
  breakLength,
  decreaseBreakLengthByOneMin,
  increaseBreakLengthByOneMin,
  disabled
}) => {
  return (
    <div>
      <div className="input-group input-group-lg mb-2">
        <span className="input-group-text" data-testid="duration-break">
          {/* TODO: Update this text to display the current break session duration */}
          <p id="break-label">Break Duration: </p>
          
          <p id="break-length">{secondsToDuration(breakLength)}</p>
        </span>
        <div className="input-group-append">
          {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="decrease-break"
            onClick={decreaseBreakLengthByOneMin}
            id="decrease-break"
            disabled={disabled}
          >
            <span className="oi oi-minus" />
          </button>
          {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="increase-break"
            onClick={increaseBreakLengthByOneMin}
            id="increase-break"
            disabled={disabled}
          >
            <span className="oi oi-plus" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Break;
