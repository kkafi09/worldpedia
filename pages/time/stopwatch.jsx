import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      });
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timerOn]);

  const addData = () => {
    setDatas([
      ...datas,
      {
        time: time,
      },
    ]);
  };

  const resetButtonHandle = () => {
    setDatas([]);
    setTime(0);
    setTimerOn(false);
  };
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
        <div className="bg-primary-content w-2/3 ml-6 mr-3 h-72 flex justify-center items-center flex-col rounded-md">
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              {time > 3600000 ? (
                <span className=" font-mono text-5xl">
                  <span>
                    {("0" + Math.floor((time / 3600000) % 600)).slice(-2)}
                  </span>
                  days
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className=" font-mono text-5xl">
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span>
              </span>
              min
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="font-mono text-5xl">
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
              </span>
              sec
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="font-mono text-5xl">
                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
              </span>
              ms
            </div>
          </div>

          <div className="w-8/12 sm:w-6/12 md:w-4/12  mt-6 pt-4 flex justify-between text-white">
            {timerOn || time > 0 ? (
              ""
            ) : (
              <button
                className="w-[60px] h-[60px] mx-auto rounded-full border-2 border-white bg-black pointer text-sm"
                onClick={() => setTimerOn(true)}
              >
                Start
              </button>
            )}
            {!timerOn ? (
              ""
            ) : (
              <button
                className="w-[60px] h-[60px] mx-auto rounded-full border-2 border-white bg-black pointer text-sm"
                onClick={() => setTimerOn(false)}
              >
                Stop
              </button>
            )}
            {!timerOn && time > 0 ? (
              <button
                className="w-[60px] h-[60px] mx-auto rounded-full border-2 border-white bg-black pointer text-sm"
                onClick={() => setTimerOn(true)}
              >
                Resume
              </button>
            ) : (
              ""
            )}
            {time != 0 ? (
              <button
                className="w-[60px] h-[60px] mx-auto rounded-full border-2 border-white bg-black pointer text-sm"
                onClick={resetButtonHandle}
              >
                Reset
              </button>
            ) : (
              ""
            )}
            {time >= 0 && !timerOn ? (
              ""
            ) : (
              <button
                className="w-[60px] h-[60px] mx-auto rounded-full border-2 border-white bg-black pointer text-sm"
                onClick={addData}
              >
                Lap
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stopwatch;
