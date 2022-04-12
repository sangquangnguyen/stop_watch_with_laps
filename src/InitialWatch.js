import React from "react";
import Duration from "./Duration";

const InitialWatch = ({ onStartWatch }) => {
  return (
    <div>
      <p>Initial</p>
      <Duration durationMs={0} />
      <button onClick={onStartWatch} style={{ marginTop: 10 }}>
        Start
      </button>
    </div>
  );
};

export default InitialWatch;
