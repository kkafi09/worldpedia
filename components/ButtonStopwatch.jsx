const ButtonStopwatch = (props) => {
  const disabled = props.stop ? "disabled" : "";

  return (
    <div className="">
      {props.status === 0 ? (
        <button className="btn btn-primary mx-2" onClick={props.start}>
          Start
        </button>
      ) : (
        ""
      )}

      {props.status === 1 ? (
        <div>
          <button className="btn mx-2" onClick={props.stop}>
            Stop
          </button>
          <button className="btn mx-2" onClick={props.reset}>
            Reset
          </button>
        </div>
      ) : (
        ""
      )}

      {props.status === 2 ? (
        <div>
          <button className="btn mx-2" onClick={props.resume}>
            Resume
          </button>
          <button className="btn mx-2" onClick={props.reset}>
            Reset
          </button>
        </div>
      ) : (
        ""
      )}

      <button className="btn mx-2" disabled={props.stop ? "true" : "false"}>
        Lap
      </button>
    </div>
  );
};

export default ButtonStopwatch;
