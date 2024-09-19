import React, { useContext, useEffect, useState } from "react";
import "./WeatherDisplay.scss";
import { WeatherContext } from "../../hooks/weatherContext";
import WeatherInput from "../WeatherInput/WeatherInput";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import conditionsData from "../WeatherInfo/conditionsData";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const WeatherDisplay = () => {
  const [iconId, setIconId] = useState("01d");
  const [accentColor, setAccentColor] = useState("ffa500");
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

      if (weatherCondition && weatherCondition.color) {
        setAccentColor(weatherCondition.color);
      } else {
        setAccentColor("#ffa500");
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
    ${accentColor} 50%,
    transparent 90%`,
          }}
        >
          {weatherData ? <>{Math.round(weatherData.main.temp)}°</> : <p>0</p>}
        </div>
        <div className="temp-circle" />
        <WeatherInfo />
      </div>
    </div>
  );
};

export default WeatherDisplay;
