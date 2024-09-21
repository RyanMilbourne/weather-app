import React, { useContext } from "react";
import "./HeaderDisplayStyles.scss";
import { WeatherContext } from "../../../hooks/weatherContext";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import BookmarksRoundedIcon from "@mui/icons-material/BookmarksRounded";
import WeatherInput from "../../WeatherInput/WeatherInput";

const HeaderDisplay = () => {
  const { city, search, handleSearchToggle } = useContext(WeatherContext);

  const iconStyle = {
    width: "1.5rem",
    height: "1.5rem",
    padding: 0,
    margin: 0,
    cursor: "pointer",
  };
  return (
    <div className="weather-display-header">
      <div className="weather-display-preset-icon">
        <BookmarksRoundedIcon style={iconStyle} />
      </div>
      <div className="weather-display-location" onClick={handleSearchToggle}>
        {city}
      </div>
      <div className="weather-display-search-icon" onClick={handleSearchToggle}>
        <SearchRoundedIcon style={iconStyle} />
      </div>

      {search && <WeatherInput handleSearchToggle={handleSearchToggle} />}
    </div>
  );
};

export default HeaderDisplay;
