import "./WeatherDisplay.scss";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import HeaderDisplay from "./header-display/HeaderDisplay";
import WeatherBackground from "./weather-background/WeatherBackground";
import Bookmarks from "../Booksmarks/Bookmarks";

const WeatherDisplay = () => {
  return (
    <div className="weather-display-container">
      <Bookmarks />
      <HeaderDisplay />
      <WeatherBackground />
      <WeatherInfo />
    </div>
  );
};

export default WeatherDisplay;
