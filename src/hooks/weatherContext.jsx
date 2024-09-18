import React, { createContext, useState } from "react";
import axios from "axios";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("Squamish, BC, Canada");
  const [inputCity, setInputCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
  const [search, setSearch] = useState(false);

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeatherData = async (lat, lon) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleSearchToggle = () => {
    setSearch((prev) => !prev);
  };

  const handleSelect = async (value) => {
    try {
      const results = await geocodeByAddress(value);
      const latlng = await getLatLng(results[0]);
      setCity(value);
      setCoordinates(latlng);

      const weatherData = await fetchWeatherData(latlng.lat, latlng.lng);
      handleSearchToggle(false);
      setInputCity(null);
    } catch (error) {
      console.error("Error fetching coordinates: ", error);
    }
  };

  const handleInputChange = (value) => {
    setInputCity(value);
  };

  return (
    <WeatherContext.Provider
      value={{
        city,
        inputCity,
        suggestions,
        setInputCity,
        coordinates,
        handleInputChange,
        handleSelect,
        search,
        handleSearchToggle,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
