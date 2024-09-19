import React, { useContext } from "react";
import { WeatherContext } from "../../hooks/weatherContext";
import WbTwilightRoundedIcon from "@mui/icons-material/WbTwilightRounded";
import OpacityRoundedIcon from "@mui/icons-material/OpacityRounded";
import "./WeatherInfoStyles.scss";
import InfoRowItem from "./InfoRowItem";

const WeatherInfo = () => {
  const { weatherData, city } = useContext(WeatherContext);

  const formattedCity = city.split(",").slice(0, 2).join(",").trim();

  const convertToPST = (timestamp) => {
    const date = new Date(timestamp * 1000);

    const options = {
      timeZone: "America/Los_Angeles",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    return date.toLocaleString("en-us", options);
  };

  console.log("This is information: ", weatherData);
  return (
    <div className="info-container">
      {weatherData ? (
        <div className="info-wrapper">
          <div className="info-temp-wrapper">
            {weatherData ? <>{Math.round(weatherData.main.temp)}°</> : <p></p>}
          </div>
          <div className="info-header">{formattedCity}</div>
          <div className="info-row-wrapper">
            <div className="current-conditions-wrapper">
              {weatherData.weather[0].description}
            </div>
            <InfoRowItem
              hero={`${Math.round(weatherData.main.temp_min)}°`}
              secondary="min"
              adjust={true}
            />
            <InfoRowItem
              hero={`${Math.round(weatherData.main.temp_max)}°`}
              secondary="max"
              adjust={true}
            />
            <InfoRowItem
              hero={<WbTwilightRoundedIcon />}
              secondary={convertToPST(weatherData.sys.sunrise)}
            />
            <InfoRowItem
              hero={<WbTwilightRoundedIcon />}
              secondary={convertToPST(weatherData.sys.sunset)}
            />
            <InfoRowItem
              hero={<OpacityRoundedIcon />}
              secondary={weatherData.main.humidity}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default WeatherInfo;
