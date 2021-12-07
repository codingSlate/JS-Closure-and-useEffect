import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const myTimer = setInterval(() => {
      setTime(time + 1);
    }, 1000);
    return () => {
      clearInterval(myTimer);
    };
  }, []);
  // console.log('Timer set ');

  return (
    <>
      <div>{time}</div>
      <button>Stop</button>
    </>
  );
};
export default Stopwatch;
