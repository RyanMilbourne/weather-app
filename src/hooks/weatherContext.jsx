import React, { createContext, useState } from "react";
import axios from "axios";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("Vancouver");
  const [inputCity, setInputCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchCitySuggestions = async (query) => {
    if (query.length < 2) return;

    try {
      const response = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${apiKey}`
      );
      setSuggestions(response.data);
    } catch (error) {
      console.error("Error fetching suggestions", error);
    }
  };

  const handleInputChange = (e) => {
    setInputCity(e.target.value);
    fetchCitySuggestions(e.target.value);
  };

  const handleSuggestionClick = (suggestions) => {
    setCity(suggestions.name);
    setInputCity("");
    setSuggestions([]);
  };

  const handleCityChange = (e) => {
    e.preventDefault();
    setCity(inputCity);
    setSuggestions([]);
  };

  return (
    <WeatherContext.Provider
      value={{
        city,
        inputCity,
        suggestions,
        setInputCity,
        handleInputChange,
        handleSuggestionClick,
        handleCityChange,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
