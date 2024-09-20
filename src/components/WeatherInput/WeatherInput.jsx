import React, { useContext } from "react";
import "./WeatherInputStyles.scss";
import { WeatherContext } from "../../hooks/weatherContext";
import PlacesAutocomplete from "react-places-autocomplete";

const WeatherInput = () => {
  const { inputCity, handleInputChange, handleSelect } =
    useContext(WeatherContext);

  return (
    <div className="weather-input-container">
      <div className="weather-input-wrapper">
        <PlacesAutocomplete
          value={inputCity}
          onChange={handleInputChange}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div className="search-container">
              <input
                autoFocus={true}
                {...getInputProps({
                  placeholder: "Type city name...",
                })}
              />
              <div className="places-suggestions-container">
                {inputCity && suggestions.length > 0 && (
                  <div className="places-suggestions-wrapper">
                    {loading && <div>searching...</div>}
                    {suggestions.map((suggestion, index) => {
                      return (
                        <div
                          className="places-suggestions-item"
                          key={index}
                          {...getSuggestionItemProps(suggestion)}
                        >
                          {suggestion.description}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
    </div>
  );
};

export default WeatherInput;
