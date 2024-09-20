import React, { useContext } from "react";
import { WeatherContext } from "../../hooks/weatherContext";
import NavigationRoundedIcon from "@mui/icons-material/NavigationRounded";

const HeroRow = () => {
  const { weatherData } = useContext(WeatherContext);

  const currentCondition = weatherData.weather[0].description;
  const wind = weatherData.wind.deg;

  return (
    <div className="info-hero-details-wrapper">
      <div className="hero-feels-like">
        feels like {Math.round(weatherData.main.feels_like)}°
      </div>
      <div className="hero-conditions">{currentCondition}</div>
      <div className="hero-wind-container">
        <div className="hero-wind-wrapper">
          <div
            className="hero-wind-indicator"
            style={{ transform: `rotate(${wind}deg)` }}
          >
            <NavigationRoundedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRow;
