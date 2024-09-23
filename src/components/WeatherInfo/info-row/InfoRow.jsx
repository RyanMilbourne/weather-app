import React, { useContext } from "react";
import "./InfoRowStyles.scss";
import { toZonedTime, format } from "date-fns-tz";

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

    // Convert UTC date to the local timezone
    const zonedDate = toZonedTime(date, timezone);

    // Format the zoned date to a readable time string (handling DST)
    const formattedDate = format(zonedDate, "hh:mm a", { timeZone: timezone });

    return formattedDate;
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
