import React, { useState } from "react";
import "./App.css";
import Duration from "./Duration";
import InitialWatch from "./InitialWatch";
import RunningWatch from "./RunningWatch";
import StopWatch from "./StopWatch";

const STATUS = {
  INITIAL: 0,
  RUNNING: 1,
  STOPPED: 2,
};

function App() {
  const [status, setStatus] = useState(STATUS.INITIAL);
  const [startTime, setStartTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [laps, setLaps] = useState([]);
  const onStopWatch = (currentTime) => {
    setDuration(currentTime);
    setStatus(STATUS.STOPPED);
  };

  return (
    <div className="App">
      {status === STATUS.INITIAL && (
        <InitialWatch
          onStartWatch={() => {
            setStartTime(Date.now());
            setStatus(STATUS.RUNNING);
          }}
        />
      )}
      {status === STATUS.RUNNING && (
        <RunningWatch
          onStopWatch={onStopWatch}
          onLapWatch={(d) =>
            setLaps((laps) => {
              return [d, ...laps].slice(0, 10);
            })
          }
          startTimeMs={startTime}
        />
      )}
      {status === STATUS.STOPPED && (
        <StopWatch
          onResumeWatch={() => {
            setStartTime(Date.now() - duration);
            setStatus(STATUS.RUNNING);
          }}
          onResetWatch={() => {
            setStartTime(0);
            setLaps([]);
            setDuration(0);
          }}
          duration={duration}
        />
      )}
      <ul>
        {laps.map((l) => {
          return (
            <li>
              <Duration durationMs={l} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
