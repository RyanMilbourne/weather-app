import React, { useContext } from "react";
import { WeatherContext } from "../../hooks/weatherContext";
import conditionsData from "./conditionsData";
import WbTwilightRoundedIcon from "@mui/icons-material/WbTwilightRounded";
import OpacityRoundedIcon from "@mui/icons-material/OpacityRounded";
import "./WeatherInfoStyles.scss";

const WeatherInfo = () => {
  const { weatherData, city } = useContext(WeatherContext);

  const formattedCity = city.split(",").slice(0, 2).join(",").trim();

  const convertToPST = (timestamp) => {
    const date = new Date(timestamp * 1000);

    const options = {
      timeZone: "America/Los_Angeles",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    return date.toLocaleString("en-us", options);
  };

  console.log("This is information: ", weatherData);
  return (
    <div className="info-container">
      {weatherData ? (
        <div className="info-wrapper">
          <div className="info-temp-wrapper">
            {weatherData ? <>{Math.round(weatherData.main.temp)}°</> : <p></p>}
          </div>
          <div className="info-header">{formattedCity}</div>
          <p>{weatherData.weather[0].description}</p>
          <div className="info-row-wrapper">
            <div className="info-row-item">
              <div className="info-row-hero adjust">
                {Math.round(weatherData.main.temp_min)}°
              </div>
              <div className="info-row-secondary">min</div>
            </div>
            <div className="info-row-item">
              <div className="info-row-hero adjust">
                {Math.round(weatherData.main.temp_max)}°
              </div>
              <div className="info-row-secondary">max</div>
            </div>
            <div className="info-row-item">
              <div className="info-row-hero">
                <WbTwilightRoundedIcon />
              </div>
              <div className="info-row-secondary">
                {convertToPST(weatherData.sys.sunrise)}
              </div>
            </div>
            <div className="info-row-item">
              <div className="info-row-hero">
                <WbTwilightRoundedIcon />
              </div>
              <div className="info-row-secondary">
                {convertToPST(weatherData.sys.sunset)}
              </div>
            </div>
            <div className="info-row-item">
              <div className="info-row-hero">
                <OpacityRoundedIcon />
              </div>
              <div className="info-row-secondary">
                {weatherData.main.humidity}
              </div>
            </div>
          </div>
          {/* <p>{weatherData.weather[0].description}</p>
          <p>humidity: {weatherData.main.humidity}</p>
          <p>min: {weatherData.main.temp_min}</p>
          <p>max: {weatherData.main.temp_max}</p>
          <p>sunrise: {convertToPST(weatherData.sys.sunrise)}</p>
          <p>sunrise: {convertToPST(weatherData.sys.sunset)}</p> */}
        </div>
      ) : null}
    </div>
  );
};

export default WeatherInfo;
