import React, { useState, useEffect, useRef } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);

  const curTime = useRef(0);

  useEffect(() => {
    const myTimer = setInterval(() => {
      curTime.current++;
      // setTime(time + 1);
      setTime(curTime.current);
      // console.log('Its run because of closure: Timer set ');
      // console.log(time); // but the time is 0
    }, 1000);
    return () => {
      clearInterval(myTimer);
    };
  }, []);

  return (
    <>
      <div>{time}</div>
      <button>Stop</button>
    </>
  );
};
export default Stopwatch;
