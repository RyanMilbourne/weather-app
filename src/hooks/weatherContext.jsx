import React, { createContext, useState, useEffect } from "react";
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
  const [weatherData, setWeatherData] = useState(null);
  const [viewBookmarks, setViewBookmarks] = useState(false);

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeatherData(response.data);
        handleSearchToggle(false);
        setInputCity(null);
        setViewBookmarks(false);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    if (city) fetchWeather();
  }, [city]);

  const handleSearchToggle = () => {
    setSearch((prev) => !prev);
  };

  const handleSelect = async (value) => {
    try {
      const results = await geocodeByAddress(value);
      const latlng = await getLatLng(results[0]);
      setCity(value);
      setCoordinates(latlng);
    } catch (error) {
      console.error("Error fetching coordinates: ", error);
    }
  };

  const handleInputChange = (value) => {
    setInputCity(value);
  };

  const toggleBookmarks = () => setViewBookmarks((prev) => !prev);

  const handleBookmarkClick = (value) => {
    setCity(value);
    setInputCity(value);
    handleSearchToggle(false);
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
        weatherData,
        viewBookmarks,
        toggleBookmarks,
        handleBookmarkClick,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
