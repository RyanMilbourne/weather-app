import React, { useContext } from "react";
import "./HeroRowStyles.scss";
import { WeatherContext } from "../../../hooks/weatherContext";
import NavigationRoundedIcon from "@mui/icons-material/NavigationRounded";
import HeroIcon from "./HeroIcon";

const HeroRow = () => {
  const { weatherData } = useContext(WeatherContext);

  const currentCondition = weatherData.weather[0].description;
  const wind = weatherData.wind.deg;
  const iconId = weatherData.weather[0].icon;

  console.log("look here: ", iconId);

  return (
    <div className="info-hero-details-wrapper">
      <div className="hero-icon-container">
        <HeroIcon iconId={iconId} />
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
