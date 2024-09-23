import React, { useContext } from "react";
import { WeatherContext } from "../../hooks/weatherContext";
import "./WeatherInfoStyles.scss";
import InfoRow from "./info-row/InfoRow";
import HeroRow from "./hero-row/HeroRow";

const WeatherInfo = () => {
  const { weatherData, city } = useContext(WeatherContext);

  const formattedCity = city.split(",").slice(0, 2).join(",").trim();

  return (
    <div className="info-container">
      {weatherData ? (
        <div className="info-wrapper">
          <div className="info-temp-wrapper">
            {weatherData ? <>{Math.round(weatherData.main.temp)}°</> : <p></p>}
          </div>
          <div className="info-header">
            <div className="header-location">{formattedCity}</div>
          </div>
          <InfoRow />
          <HeroRow />
        </div>
      ) : null}
    </div>
  );
};

export default WeatherInfo;
