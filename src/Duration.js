import React from "react";

const Duration = ({ durationMs }) => {
  return <div>{new Date(durationMs).toISOString().slice(11, 23)}</div>;
};

export default Duration;
