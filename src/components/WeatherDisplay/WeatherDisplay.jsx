import React, { useContext, useEffect, useState } from "react";
import "./WeatherDisplay.scss";
import axios from "axios";
import { WeatherContext } from "../../hooks/weatherContext";
import WeatherInput from "../WeatherInput/WeatherInput";
import WeatherInfo from "../WeatherInfo/WeatherInfo";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const WeatherDisplay = () => {
  const { weatherData, city, search, handleSearchToggle } =
    useContext(WeatherContext);

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const iconStyle = {
    width: "1.5rem",
    height: "1.5rem",
    padding: 0,
    margin: 0,
  };

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
        <div className="weather-display-temp-wrapper">
          {weatherData ? <>{Math.round(weatherData.main.temp)}°</> : <p>0</p>}
        </div>
        <div className="temp-circle" />
        <WeatherInfo />
      </div>
    </div>
  );
};

export default WeatherDisplay;
