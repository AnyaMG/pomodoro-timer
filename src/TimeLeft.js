import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { secondsToDuration } from "./utils/duration";
import classNames from "./utils/class-names";


const TimeLeft = ({ focusLength, breakLength, handleSessionStarted, session }) => {
  const [currentSessionType, setCurrentSessionType] = useState("Focus");
  const [timeLeft, setTimeLeft] = useState(focusLength);
  const [intervalId, setIntervalId] = useState(null);
  const [eitherSessionTypeLength, setEitherSessionTypeLength] = useState(focusLength);
  const [stopDisabled, setStopDisabled] = useState(false);

  useEffect(() => {
    if (currentSessionType === 'Focus') {
      setTimeLeft(focusLength);
      setEitherSessionTypeLength(focusLength);
    } else {
      setTimeLeft(breakLength);
      setEitherSessionTypeLength(breakLength);
    }
  }, [focusLength, breakLength])
  
  useEffect(() => {
    if (timeLeft < 0) {
      if (currentSessionType === 'Focus') {
        new Audio(`${process.env.PUBLIC_URL}/alarm/breaktime.mp3`).play();
        setTimeLeft(breakLength);
        setEitherSessionTypeLength(breakLength);
        setCurrentSessionType('Break');
      } else {
        new Audio(`${process.env.PUBLIC_URL}/alarm/studytime.mp3`).play();
        setTimeLeft(focusLength);
        setEitherSessionTypeLength(focusLength);
        setCurrentSessionType('Focus');
      }
    }
  }, [timeLeft]);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    }
  }, []);

  const isStarted = intervalId !== null;

  const startTimer = () => {
    const newIntervalId = setInterval(() => {
      setTimeLeft(time => {
        return time - 1;
      });
    }, 1000);

    setIntervalId(newIntervalId);
    handleSessionStarted(true);
  }

  const stopSession = () => {
    if (!stopDisabled) {
      setTimeLeft(focusLength);
      setEitherSessionTypeLength(focusLength);
      setCurrentSessionType('Focus');
      handleSessionStarted(false);
    }
  }
  
  const playPause = () => {
    if (isStarted) {
      clearInterval(intervalId);
      setIntervalId(null);
      setStopDisabled(false);
    } else {
      startTimer();
      setStopDisabled(true);
    }
  };

  return (
    <div>
      <h2 data-testid="session-title">
        {currentSessionType === "Focus" ? "Focusing" : "On Break"} for{" "}
        {currentSessionType === "Focus"
          ? secondsToDuration(focusLength)
          : secondsToDuration(breakLength)}{" "}
        minutes
        <br />
        {currentSessionType === "Focus" ? "On Break" : "Focusing"} for{" "}
        {currentSessionType === "Focus"
          ? secondsToDuration(breakLength)
          : secondsToDuration(focusLength)}{" "}
        minutes
      </h2>
      {/* TODO: Update message below to include time remaining in the current session */}

      <p className="lead" data-testid="session-sub-title" id="time-left">
        {secondsToDuration(timeLeft)} remaining
      </p>
      <br />
      <br />
      <h3>{!session ? '' : isStarted ? '' : 'PAUSED'}</h3>
      <br />
      <br />
      <div
        className="btn-group btn-group-lg mb-2"
        role="group"
        aria-label="Timer controls"
      >
        <button
          type="button"
          className="btn btn-primary"
          data-testid="play-pause"
          title="Start or pause timer"
          onClick={playPause}
        >
          <span
            className={classNames({
              oi: true,
              "oi-media-play": !isStarted,
              "oi-media-pause": isStarted,
            })}
          />
        </button>
        {/* TODO: Implement stopping the current focus or break session and disable when there is no active session */}
        <button
          type="button"
          className="btn btn-secondary"
          title="Stop the session"
          disabled={stopDisabled}
          onClick={stopSession}
        >
          <span className="oi oi-media-stop" />
        </button>
      </div>
      <div className="progress" style={{ height: "20px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={100 - (timeLeft / eitherSessionTypeLength) * 100} // TODO: Increase aria-valuenow as elapsed time increases
          style={{ width: `${100 - (timeLeft / eitherSessionTypeLength) * 100}%` }} // TODO: Increase width % as elapsed time increases/>
        />
      </div>
    </div>
  );
};

export default TimeLeft;
