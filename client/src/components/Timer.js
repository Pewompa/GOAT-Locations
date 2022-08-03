import { useState, useEffect } from 'react';
import UtilTimer from './UtilTimer';
const defaultRemainingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00',
  days: '00',
};
const Timer = ({ countDownTimeStampMS }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countDownTimeStampMS);
    }, 1000);
    return () => clearTimeout(intervalId);
  }, [countDownTimeStampMS]);

  function updateRemainingTime(countdown) {
    setRemainingTime(UtilTimer(countdown));
  }

  return (
    <div className="countdown-timer">
      <span>{remainingTime.days}</span>
      <span>days</span>
      <span className="two-numbers">{remainingTime.hours}</span>
      <span>hours</span>
      <span className="two-numbers">{remainingTime.minutes}</span>
      <span>minutes</span>
      <span className="two-numbers">{remainingTime.seconds}</span>
      <span>seconds</span>
    </div>
  );
};

export default Timer;
