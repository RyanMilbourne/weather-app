import React, { useContext } from "react";
import "./InfoRowStyles.scss";
import InfoRowItem from "./InfoRowItem";
import { WeatherContext } from "../../../hooks/weatherContext";
import OpacityRoundedIcon from "@mui/icons-material/OpacityRounded";
import useTimezoneOffset from "../../../hooks/useTimezoneOffset";
import Sunset from "../../../../public/icons/Sunset";
import Sunrise from "../../../../public/icons/sunrise";

const InfoRow = () => {
  const { weatherData } = useContext(WeatherContext);

  const minTemp = Math.round(weatherData.main.temp_min);
  const maxTemp = Math.round(weatherData.main.temp_max);
  const sunrise = weatherData.sys.sunrise;
  const sunset = weatherData.sys.sunset;
  const humidity = weatherData.main.humidity;
  const timezoneOffset = weatherData.timezone;

  const convertToLocalTime = (timestamp) => {
    const timezone = useTimezoneOffset(timezoneOffset);
    const date = new Date(timestamp * 1000);

    const options = {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    return date.toLocaleString("en-US", options);
  };

  return (
    <div className="info-row-wrapper">
      <InfoRowItem hero={`${minTemp}°`} secondary="min" adjust={true} />
      <InfoRowItem hero={`${maxTemp}°`} secondary="max" adjust={true} />
      <InfoRowItem hero={<Sunrise />} secondary={convertToLocalTime(sunrise)} />
      <InfoRowItem hero={<Sunset />} secondary={convertToLocalTime(sunset)} />
      <InfoRowItem hero={<OpacityRoundedIcon />} secondary={`${humidity}%rh`} />
    </div>
  );
};

export default InfoRow;
