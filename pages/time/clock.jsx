import React, { useEffect, useState } from "react";
import BreadCrumbs from "../../components/BreadCrumb";

function Clock() {
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");

  const formatTime = (val) => {
    if (val < 10) {
      return "0";
    } else {
      return "";
    }
  };

  const tick = () => {
    // date variable
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    setHour(formatTime(hour) + hour);
    setMinute(formatTime(minute) + minute);
    setSecond(formatTime(second) + second);
  };

  useEffect(() => {
    const timeId = setInterval(() => tick(), 1000);

    console.log(hour + " " + minute + " " + second);

    return function cleanup() {
      clearInterval(timeId);
    };
  });

  // clock function

  return (
    <>
      <BreadCrumbs />
      <span className="countdown font-secular text-5xl">
        <span style={{ "--value": hour }}></span>:
        <span style={{ "--value": minute }}></span>:
        <span style={{ "--value": second }}></span>
      </span>
    </>
  );
}

export default Clock;
