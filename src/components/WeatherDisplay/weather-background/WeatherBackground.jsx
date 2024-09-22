import React, { useState, useEffect, useContext } from "react";
import { WeatherContext } from "../../../hooks/weatherContext";
import conditionsData from "../../WeatherInfo/conditionsData";
import SunMoon from "../SunMoon/SunMoon";
import Cloud2 from "./background-graphics/Cloud2";
import Cloud1 from "./background-graphics/Cloud1";
import Rain1 from "./background-graphics/Rain1";

const WeatherBackground = () => {
  const [iconId, setIconId] = useState("01d");
  const [skyColor, setSkyColor] = useState("ffa500");
  const [circleColor, setCircleColor] = useState("#ffa60000");

  const { weatherData } = useContext(WeatherContext);

  useEffect(() => {
    if (weatherData !== null) {
      const fetchedIconId = weatherData.weather[0].icon;
      setIconId(fetchedIconId);

      const weatherCondition = conditionsData[fetchedIconId];

      if (weatherCondition && weatherCondition.sky) {
        setSkyColor(weatherCondition.sky);
        setCircleColor(weatherCondition.circle);
      } else {
        setSkyColor("#ffa500");
        setCircleColor("#ffa60000");
      }
    }
  }, [weatherData]);

  const backgroundStyle = {
    background: `linear-gradient(
      to bottom,
      ${skyColor} 50%,
      transparent 90%`,
  };

  return (
    <div className="weather-display-wrapper">
      <div
        className="weather-display-background-wrapper"
        style={backgroundStyle}
      >
        <SunMoon circleColor={circleColor} />
        <div className="graphic-1">
          {/* {(iconId === "01d" || iconId === "01n") && <Cloud1 />} */}
          {/* {(iconId === "02d" || iconId === "02n") && <Cloud1 />} */}
          {(iconId === "03d" || iconId === "03n") && <Cloud1 />}
          {(iconId === "04d" || iconId === "04n") && <Cloud1 />}
          {(iconId === "09d" || iconId === "09n") && <Cloud1 />}
          {(iconId === "10d" || iconId === "10n") && <Cloud1 />}
          {(iconId === "11d" || iconId === "11n") && <Cloud1 />}
          {/* {(iconId === "13d" || iconId === "13n") && <Cloud1 />} */}
          {/* {(iconId === "50d" || iconId === "50n") && <Cloud1 />} */}
        </div>
        <div className="graphic-2">
          {/* {(iconId === "01d" || iconId === "01n") && <Cloud2 />} */}
          {(iconId === "02d" || iconId === "02n") && <Cloud2 />}
          {(iconId === "03d" || iconId === "03n") && <Cloud2 />}
          {(iconId === "04d" || iconId === "04n") && <Cloud2 />}
          {(iconId === "09d" || iconId === "09n") && <Cloud2 />}
          {(iconId === "10d" || iconId === "10n") && <Cloud2 />}
          {(iconId === "11d" || iconId === "11n") && <Cloud2 />}
          {/* {(iconId === "13d" || iconId === "13n") && <Cloud2 />} */}
          {/* {(iconId === "50d" || iconId === "50n") && <Cloud2 />} */}
        </div>
        <div className="graphic-3">
          {(iconId === "09d" || iconId === "09n") && <Rain1 />}
          {(iconId === "10d" || iconId === "10n") && <Rain1 />}
        </div>
      </div>
    </div>
  );
};

export default WeatherBackground;
