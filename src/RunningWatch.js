import React, { useState, useEffect } from "react";
import Duration from "./Duration";

const useTime = () => {
  const [time, setTime] = useState(Date.now());
  useEffect(() => {
    let id;
    function repaint() {
      setTime(Date.now());
      id = requestAnimationFrame(repaint);
    }

    repaint();

    return () => {
      cancelAnimationFrame(id);
    };
  }, []);
  return time;
};

const RunningWatch = ({ onStopWatch, startTimeMs, onLapWatch }) => {
  const currentTime = useTime() - startTimeMs;

  return (
    <div>
      <p>Running</p>
      <Duration durationMs={currentTime} />
      <div style={{ marginTop: 10 }}>
        <button
          onClick={() => {
            onStopWatch(currentTime);
          }}
        >
          Stop
        </button>
        <button
          onClick={() => onLapWatch(currentTime)}
          style={{ marginLeft: 10 }}
        >
          Lap
        </button>
      </div>
    </div>
  );
};

export default RunningWatch;
