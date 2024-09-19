import React, { useContext, useEffect, useState } from "react";
import "./WeatherDisplay.scss";
import { WeatherContext } from "../../hooks/weatherContext";
import WeatherInput from "../WeatherInput/WeatherInput";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import conditionsData from "../WeatherInfo/conditionsData";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const WeatherDisplay = () => {
  const [iconId, setIconId] = useState("01d");
  const [skyColor, setSkyColor] = useState("ffa500");
  const [circleColor, setCircleColor] = useState("#ffa60000");

  const { weatherData, city, search, handleSearchToggle } =
    useContext(WeatherContext);

  const iconStyle = {
    width: "1.5rem",
    height: "1.5rem",
    padding: 0,
    margin: 0,
  };

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
      <div className="weather-display-search-icon" onClick={handleSearchToggle}>
        <SearchRoundedIcon style={iconStyle} />
      </div>
      {search && <WeatherInput handleSearchToggle={handleSearchToggle} />}
      <div className="weather-display-wrapper">
        <div className="weather-display-header" onClick={handleSearchToggle}>
          {city}
        </div>
        <div
          className="weather-display-temp-wrapper"
          style={{
            background: `linear-gradient(
    to bottom,
    ${skyColor} 50%,
    transparent 90%`,
          }}
        >
          {weatherData ? <>{Math.round(weatherData.main.temp)}°</> : <p></p>}
        </div>
        <div
          className="sun-moon-graphic"
          style={{ backgroundColor: `${circleColor}` }}
        />
        <WeatherInfo />
      </div>
    </div>
  );
};

export default WeatherDisplay;
