import React, { useContext, useState } from "react";
import { WeatherContext } from "../../hooks/weatherContext";

const WeatherInput = () => {
  const {
    inputCity,
    handleInputChange,
    handleSuggestionClick,
    handleCityChange,
    suggestions,
  } = useContext(WeatherContext);

  console.log(suggestions);

  return (
    <form onSubmit={handleCityChange}>
      <input
        type="text"
        value={inputCity}
        onChange={handleInputChange}
        placeholder="enter a city"
        autoComplete="off"
      />
      {/* <button type="submit">get weather</button> */}

      {suggestions.length > 0 && (
        <div>
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              style={{
                cursor: "pointer",
                padding: "5px",
                border: "1px solid #ddd",
              }}
            >
              {suggestion.name}, {suggestion.country}
            </li>
          ))}
        </div>
      )}
    </form>
  );
};

export default WeatherInput;
