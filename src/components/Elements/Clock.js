import React, { useState, useEffect } from "react";

function Clock(props) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);

    return function clearTimer() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setTime(new Date());
  }

  return <>{time.toLocaleTimeString()}</>;
}

export default Clock;
