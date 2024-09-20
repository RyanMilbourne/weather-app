import WeatherDisplay from "../../components/WeatherDisplay/WeatherDisplay";
import "./HomepageStyles.scss";
import { Helmet } from "react-helmet";

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Weather App</title>
        <meta name="description" content="Weather App Practice Build" />
      </Helmet>
      <div className="homepage-container">
        <WeatherDisplay />
      </div>
    </>
  );
};

export default Homepage;
