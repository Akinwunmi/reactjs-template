import React, { useState, useEffect } from "react";

function CurrentDate(props) {
  const [day, setDay] = useState(new Date());

  useEffect(() => {
    let dateID = setInterval(() => tick(), 360000);

    return function clearTimer() {
      clearInterval(dateID);
    };
  });

  function tick() {
    setDay(new Date());
  }

  return <>{day.toLocaleDateString()}</>;
}

export default CurrentDate;
