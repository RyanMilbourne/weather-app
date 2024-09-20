import React from "react";

const SunMoon = ({ circleColor }) => {
  return (
    <div
      className="sun-moon-graphic"
      style={{ backgroundColor: `${circleColor}` }}
    />
  );
};

export default SunMoon;
