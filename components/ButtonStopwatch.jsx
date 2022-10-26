const ButtonStopwatch = (props) => {
  return (
    <div className="">
      {props.status === 0 ? (
        <>
          <button className="btn btn-primary mx-2 w-40" onClick={props.start}>
            Start
          </button>
          <button className="btn mx-2 w-24" disabled={true}>
            Reset
          </button>
          <button className="btn btn-secondary mx-2" disabled={true}>
            Lap
          </button>
        </>
      ) : (
        ""
      )}

      {props.status === 1 ? (
        <>
          <button className="btn btn-primary mx-2 w-40" onClick={props.stop}>
            Stop
          </button>
          <button className="btn mx-2 w-24" disabled={true}>
            Reset
          </button>
          <button className="btn btn-secondary mx-2" onClick={props.lap}>
            Lap
          </button>
        </>
      ) : (
        ""
      )}

      {props.status === 2 ? (
        <>
          <button className="btn btn-primary mx-2 w-40" onClick={props.resume}>
            Resume
          </button>
          <button className="btn mx-2 w-24" onClick={props.reset}>
            Reset
          </button>
          <button className="btn btn-secondary mx-2" disabled={true}>
            Lap
          </button>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default ButtonStopwatch;
