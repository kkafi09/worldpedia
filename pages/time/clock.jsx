import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import screenfull from "screenfull";
import Navigation from "../../components/Navigation";

function Clock() {
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");
  const screenRef = useRef(null);

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

  const fullScreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle(screenRef.current);
    }
  };

  return (
    <>
      <Head>
        <title>Clock | kkafi09</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="icon"
          href="https://avatars.githubusercontent.com/u/59825140?v=4"
        ></link>
      </Head>
      <div className="flex my-3">
        <div className="bg-primary-content w-2/3 ml-6 mr-3 h-72 flex flex-col rounded-md items-center justify-center">
          <h1 className="text-2xl font-bold px-4 mr-auto">Digital Clock</h1>
          <div
            className="my-10 mx-auto bg-primary-content flex flex-col rounded-md items-center justify-center w-full text-[7vw]"
            ref={screenRef}
          >
            <span className={`countdown font-secular font-bold`}>
              <span style={{ "--value": hour }}></span>:
              <span style={{ "--value": minute }}></span>:
              <span style={{ "--value": second }}></span>
            </span>
          </div>
          <button
            onClick={fullScreen}
            className="btn btn-primary w-1/4 mx-auto btn-sm"
          >
            Full Screen
          </button>
        </div>

        <Navigation />
      </div>
    </>
  );
}

export default Clock;
