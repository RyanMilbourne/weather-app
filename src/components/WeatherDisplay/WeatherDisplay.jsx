import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { WeatherContext } from "../../hooks/weatherContext";

const WeatherDisplay = () => {
  const [weatherData, setWeatherData] = useState(null);

  const { city } = useContext(WeatherContext);

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  console.log(weatherData);

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
    <div>
      <h1>Weather in {city}</h1>
      {weatherData ? <p>{weatherData.main.temp}°C</p> : <p>stand by</p>}
    </div>
  );
};

export default WeatherDisplay;
