import "./WeatherDisplay.scss";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import HeaderDisplay from "./header-display/HeaderDisplay";
import WeatherBackground from "./weather-background/WeatherBackground";

const WeatherDisplay = () => {
  return (
    <div className="weather-display-container">
      <HeaderDisplay />
      <WeatherBackground />
      <WeatherInfo />
    </div>
  );
};

export default WeatherDisplay;
