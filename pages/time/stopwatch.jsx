import Head from "next/head";
import React, { useEffect, useState } from "react";
import ButtonStopwatch from "../../components/ButtonStopwatch";
import StopwatchTimer from "../../components/StopwatchTimer";

const Stopwatch = () => {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  // Not started = 0
  // started = 1
  // stopped = 2z

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  const resume = () => start();

  return (
    <>
      <Head>
        <title>Stopwatch | kkafi09</title>
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
          <h1 className="text-2xl font-bold px-4 mr-auto">Stopwatch</h1>
          <div className="mx-auto my-5 bg-primary-content flex flex-col rounded-md items-center justify-center w-full text-[6vw]">
            <StopwatchTimer time={time} />
          </div>
          <ButtonStopwatch
            status={status}
            resume={resume}
            reset={reset}
            stop={stop}
            start={start}
          />
        </div>
      </div>
    </>
  );
};

export default Stopwatch;
