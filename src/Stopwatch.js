import React, { useState, useEffect, useRef } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);

  const [counterActive, setCounterActive] = useState(false);

  const curTime = useRef(0);

  useEffect(() => {
    let myTimer = null;
    if (counterActive) {
      myTimer = setInterval(() => {
        curTime.current++;
        // setTime(time + 1);
        setTime(curTime.current);
        // console.log('Its run because of closure: Timer set ');
        // console.log(time); // but the time is 0
      }, 1000);
    }
    return () => {
      clearInterval(myTimer);
    };
  }, []);

  const onClickHandler = () => {
    setCounterActive((c) => !c);
  };
  return (
    <>
      <div>{time}</div>
      <button
        type="button"
        onClick={onClickHandler}
        aria-active={!counterActive}
      >
        Stop/Start
      </button>
    </>
  );
};
export default Stopwatch;
