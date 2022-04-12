import React from "react";
import Duration from "./Duration";

const StopWatch = ({ onResetWatch, onResumeWatch, duration }) => {
  return (
    <div>
      <p>Stopped</p>
      <Duration durationMs={duration} />
      <div style={{ marginTop: 10 }}>
        <button onClick={onResetWatch}>Reset</button>
        <button onClick={onResumeWatch} style={{ marginLeft: 10 }}>
          Resume
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
