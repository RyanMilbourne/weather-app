import React, { useContext } from "react";
import "./WeatherInputStyles.scss";
import { WeatherContext } from "../../hooks/weatherContext";
import PlacesAutocomplete from "react-places-autocomplete";

const WeatherInput = ({ handleSearchToggle }) => {
  const { inputCity, handleInputChange, handleSelect, city, coordinates } =
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
            <div className="places-suggestions-container">
              <input
                autoFocus={true}
                {...getInputProps({
                  placeholder: "Type city name...",
                })}
              />
              {inputCity ? (
                <div className="places-suggestions-wrapper">
                  {loading ? <div>searching...</div> : null}
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
              ) : null}
            </div>
          )}
        </PlacesAutocomplete>
      </div>
    </div>
  );
};

export default WeatherInput;
