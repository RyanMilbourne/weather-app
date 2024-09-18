import React, { useContext } from "react";
import "./WeatherInputStyles.scss";
import { WeatherContext } from "../../hooks/weatherContext";
import PlacesAutocomplete from "react-places-autocomplete";

const WeatherInput = () => {
  const { inputCity, handleInputChange, handleSelect, city, coordinates } =
    useContext(WeatherContext);

  return (
    <>
      <PlacesAutocomplete
        value={inputCity}
        onChange={handleInputChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: "Type city name...",
              })}
            />
            <div className="places-suggestions-container">
              {loading ? <div>searching...</div> : null}
              {suggestions.map((suggestion, index) => {
                const style = {
                  backgroundColor: suggestion.active ? "#fafafa" : "#ffffff",
                  cursor: "pointer",
                };
                return (
                  <div
                    className="places-suggestions-wrapper"
                    key={index}
                    {...getSuggestionItemProps(suggestion)}
                  >
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      {/* {city && coordinates.lat && (
        <div>
          <h2>{city}</h2>
          <p>
            Coordinates: {coordinates.lat}, {coordinates.lng}
          </p>
        </div>
      )} */}
    </>
  );
};

export default WeatherInput;
