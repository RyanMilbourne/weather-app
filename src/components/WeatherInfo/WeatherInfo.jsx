import React, { useContext } from "react";
import { WeatherContext } from "../../hooks/weatherContext";
import "./WeatherInfoStyles.scss";
import InfoRow from "./InfoRow";
import HeroRow from "./HeroRow";

const WeatherInfo = () => {
  const { weatherData, city } = useContext(WeatherContext);

  const formattedCity = city.split(",").slice(0, 2).join(",").trim();

  console.log("This is information: ", weatherData);
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
