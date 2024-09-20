import React, { useContext, useEffect, useState } from "react";
import "./WeatherDisplay.scss";
import { WeatherContext } from "../../hooks/weatherContext";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import conditionsData from "../WeatherInfo/conditionsData";
import SunMoon from "./SunMoon/SunMoon";
import HeaderDisplay from "./header-display/HeaderDisplay";

const WeatherDisplay = () => {
  const [iconId, setIconId] = useState("01d");
  const [skyColor, setSkyColor] = useState("ffa500");
  const [circleColor, setCircleColor] = useState("#ffa60000");

  const { weatherData } = useContext(WeatherContext);

  useEffect(() => {
    if (weatherData !== null) {
      const fetchedIconId = weatherData.weather[0].icon;
      setIconId(fetchedIconId);

      const weatherCondition = conditionsData[fetchedIconId];

      if (weatherCondition && weatherCondition.sky) {
        setSkyColor(weatherCondition.sky);
        setCircleColor(weatherCondition.circle);
      } else {
        setSkyColor("#ffa500");
        setCircleColor("#ffa60000");
      }
    }
  }, [weatherData]);

  return (
    <div className="weather-display-container">
      <HeaderDisplay />

      <div className="weather-display-wrapper">
        <div
          className="weather-display-temp-wrapper"
          style={{
            background: `linear-gradient(
    to bottom,
    ${skyColor} 50%,
    transparent 90%`,
          }}
        >
          <SunMoon circleColor={circleColor} />
        </div>

        <WeatherInfo />
      </div>
    </div>
  );
};

export default WeatherDisplay;
