import React from "react";
import { minutesToDuration } from "./utils/duration";

const Focus = ({
  focusLength,
  decreaseFocusLengthByFiveMin,
  increaseFocusLengthByFiveMin,
  disabled
}) => {
  return (
    <div className="input-group input-group-lg mb-2">
      <span className="input-group-text" data-testid="duration-focus">
        <p id="break-label">Focus Duration: </p>

        <p id="break-length">{minutesToDuration(focusLength / 60)}</p>
        {/* TODO: Update this text to display the current focus session duration */}
      </span>
      <div className="input-group-append">
        {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="decrease-focus"
          onClick={decreaseFocusLengthByFiveMin}
          id="decrease-focus"
          disabled={disabled}
        >
          <span className="oi oi-minus" />
        </button>
        {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="increase-focus"
          onClick={increaseFocusLengthByFiveMin}
          id="increase-focus"
          disabled={disabled}
        >
          <span className="oi oi-plus" />
        </button>
      </div>
    </div>
  );
};

export default Focus;
