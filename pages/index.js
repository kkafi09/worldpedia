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
    let i = 0;
    setDatas([
      ...datas,
      {
        id: i++,
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
    <div>
      <div>
        <span>{("0" + Math.floor((time / 3600000) % 600)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}.</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        <button onClick={() => setTimerOn(true)}>Start</button>
        <button onClick={() => setTimerOn(false)}>Stop</button>
        <button onClick={() => setTimerOn(true)}>Resume</button>
        <button onClick={resetButtonHandle}>Reset</button>
        <button onClick={addData}>Dataku</button>
      </div>
      <ul>
        {datas.map((data) => (
          <div key={data.id}>
            <span>
              {("0" + Math.floor((data.time / 60000) % 60)).slice(-2)}:
            </span>
            <span>
              {("0" + Math.floor((data.time / 1000) % 60)).slice(-2)}.
            </span>
            <span>{("0" + ((data.time / 10) % 100)).slice(-2)}</span>
          </div>
        ))}
      </ul>
    </div>
  );
}
