import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const myTimer = setInterval(() => {
      setTime(time + 1);
    }, 1000);
  }, []);
  console.log('I am ');
  return (
    <>
      <span>{time}</span>
    </>
  );
};
export default Stopwatch;
