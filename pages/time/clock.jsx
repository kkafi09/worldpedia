import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

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

    return function cleanup() {
      clearInterval(timeId);
    };
  });

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <div className="flex my-3">
        <div className="bg-primary-content w-2/3 ml-6 mr-3 my-2 h-64 flex flex-col rounded-md">
          <h1 className="text-2xl font-bold pt-3 px-4">Digital Clock</h1>
          <div className="my-10 mx-auto">
            <span className="countdown font-secular text-8xl font-bold">
              <span style={{ "--value": hour }}></span>:
              <span style={{ "--value": minute }}></span>:
              <span style={{ "--value": second }}></span>
            </span>
          </div>
        </div>

        <div className="bg-primary-content w-1/3 ml-3 mr-2 my-2 h-64 rounded-md">
          <h1 className="text-2xl font-bold pt-3 px-4">Time</h1>
          <ul className="mx-6">
            <li className="my-2">
              <div className="flex items-center">
                <i className="fa-solid fa-stopwatch mr-2"></i>
                <Link href="/time/stopwatch">Stopwatch</Link>
              </div>
            </li>
            <li className="my-2">
              <div className="flex items-center">
                <i className="fa-regular fa-clock mr-2"></i>
                <Link href="/time/timer-online">Timer Online </Link>
              </div>
            </li>
            <li className="my-2">
              <div className="flex items-center">
                <i className="fa-solid fa-hourglass-end mr-3"></i>
                <Link href="/time/countdown">Countdown</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Clock;
