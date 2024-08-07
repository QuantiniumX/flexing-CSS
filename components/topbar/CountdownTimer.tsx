"use client";

import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  timeLeft: number;
  onTimeUp: () => void;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  onTimeUp,
  timeLeft,
  setTimeLeft,
}) => {
  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp, setTimeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="countdown-timer flex ">
      <span className="hidden lg:block">Time left: </span>
      <span>
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </span>
    </div>
  );
};

export default CountdownTimer;
