import React, { useContext, useEffect, useState } from "react";
import "./WeatherDisplay.scss";
import axios from "axios";
import { WeatherContext } from "../../hooks/weatherContext";

const WeatherDisplay = () => {
  const [weatherData, setWeatherData] = useState(null);

  const { city } = useContext(WeatherContext);

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  console.log("weather data: ", weatherData);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    if (city) fetchWeather();
  }, [city]);
  return (
    <div className="weather-display-container">
      <div className="weather-display-wrapper">
        <div className="weather-display-header">
          <h1>
            {city}
            {weatherData ? <>, {weatherData.sys.country}</> : null}
          </h1>
        </div>
        <div className="weather-display-temp-wrapper">
          {weatherData ? (
            <p>{Math.round(weatherData.main.temp)}°C</p>
          ) : (
            <p>stand by</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
