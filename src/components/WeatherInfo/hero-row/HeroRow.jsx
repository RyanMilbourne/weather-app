import React, { useContext } from "react";
import "./HeroRowStyles.scss";
import { WeatherContext } from "../../../hooks/weatherContext";
import NavigationRoundedIcon from "@mui/icons-material/NavigationRounded";
import AirRoundedIcon from "@mui/icons-material/AirRounded";
import GpsFixedRoundedIcon from "@mui/icons-material/GpsFixedRounded";
import HeroIcon from "./HeroIcon";

const HeroRow = () => {
  const { weatherData } = useContext(WeatherContext);

  const currentCondition = weatherData.weather[0].description;
  const feelsLike = Math.round(weatherData.main.feels_like);
  const wind = weatherData.wind.deg;
  const windSpeed = weatherData.wind.speed;
  const iconId = weatherData.weather[0].icon;

  const iconStyle = {
    width: "1.25rem",
    height: "1.25rem",
  };

  return (
    <div className="info-hero-details-wrapper">
      <div className="hero-main-info-wrapper">
        <div className="hero-icon-container">
          <HeroIcon iconId={iconId} />
        </div>
        <div className="hero-conditions">
          {currentCondition}
          <div className="hero-feels-like">
            feels like:{" "}
            <strong style={{ fontSize: "1rem" }}>{feelsLike}°</strong>
          </div>
        </div>
      </div>
      <div className="hero-wind-container">
        <div className="hero-wind-wrapper">
          <div className="compass-direction north">N</div>
          <div className="compass-direction east">E</div>
          <div className="compass-direction south">S</div>
          <div className="compass-direction west">W</div>
          <div
            className="hero-wind-indicator"
            style={{ transform: `rotate(${wind}deg)` }}
          >
            <NavigationRoundedIcon style={iconStyle} />
          </div>
        </div>
        <div className="wind-info-wrapper">
          <div className="wind-info-row">
            <AirRoundedIcon style={iconStyle} />
            {windSpeed}
            <span className="mini">m/s</span>
          </div>
          <div className="wind-info-row">
            <GpsFixedRoundedIcon style={iconStyle} />
            {wind}°
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRow;
