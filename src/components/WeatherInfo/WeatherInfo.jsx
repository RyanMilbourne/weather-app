import React, { useContext } from "react";
import { WeatherContext } from "../../hooks/weatherContext";
import conditionsData from "./conditionsData";
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
          <p>humidity: {weatherData.main.humidity}</p>
          <p>min: {weatherData.main.temp_min}</p>
          <p>max: {weatherData.main.temp_max}</p>
          <p>sunrise: {convertToPST(weatherData.sys.sunrise)}</p>
          <p>sunrise: {convertToPST(weatherData.sys.sunset)}</p>
        </div>
      ) : null}
    </div>
  );
};

export default WeatherInfo;
