import { useState, useEffect } from "react";

export default function Home() {
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
      <div className="w-full h-screen bg-main flex justify-center items-center flex-col transition ease-in-out delay-300 ">
        <div className="w-[250px] h-[250px] rounded-full bg-white flex justify-center items-center">
          <div className="w-[230px] h-[230px] rounded-full bg-main flex justify-center items-center">
            {time > 3600000 ? (
              <span className="text-white">
                {("0" + Math.floor((time / 3600000) % 600)).slice(-2)}:
              </span>
            ) : (
              ""
            )}
            <span className="text-white text-2xl">
              {("0" + Math.floor((time / 60000) % 60)).slice(-2)} :
            </span>
            <span className="text-white text-2xl">
              &nbsp;
              {("0" + Math.floor((time / 1000) % 60)).slice(-2)} .
            </span>
            <span className="text-white text-2xl">
              &nbsp;
              {("0" + ((time / 10) % 100)).slice(-2)}
            </span>
          </div>
        </div>

        <div className="w-3/12 mt-10 pt-4 flex justify-between text-white">
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

        <div className="mt-5 pt-10">
          <ul className="h-[300px] overflow-auto text-white relative py-2 px-0 no-scrollbar">
            {datas.map((data, index) => (
              <li
                className="inline-block text-white text-center rounded-sm w-full mb-5 border-gray-100"
                key={data.time}
              >
                <span className="mx-2">{index + 1}.</span>
                <span>
                  {("0" + Math.floor((data.time / 60000) % 60)).slice(-2)}:
                </span>
                <span>
                  {("0" + Math.floor((data.time / 1000) % 60)).slice(-2)}.
                </span>
                <span>{("0" + ((data.time / 10) % 100)).slice(-2)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
