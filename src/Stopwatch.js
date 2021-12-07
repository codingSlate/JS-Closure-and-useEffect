import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const myTimer = setInterval(() => {
      setTime(time + 1);
      // console.log('Timer set ');
      console.log(time);
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
