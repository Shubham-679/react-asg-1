import React, { useState, useRef } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(5);
  const [isPaused, setIsPaused] = useState(false);
  const decrement = useRef(null);

  const handleStart = () => {
    setIsPaused(true);
    decrement.current = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(decrement.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);
    decrement.current = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(decrement.current);
    setIsPaused(false);
    setTimer(0);
  };

  const timeLeft = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    if(getSeconds <0)  return stop();

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div>
      <h3></h3>
      <div>
        <h1>{timeLeft()}</h1>
        <div>
          {!isPaused ? (
            <button className="btn btn-primary m-2" onClick={handleStart}>
              Start
            </button>
          ) : isPaused ? (
            <button className="btn btn-danger m-2" onClick={handlePause}>
              Pause
            </button>
          ) : (
            <button className="btn btn-primary m-2" onClick={handleResume}>
              Resume
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timer;
