import WeatherDisplay from "../../components/WeatherDisplay/WeatherDisplay";
import WeatherInput from "../../components/WeatherInput/WeatherInput";
import "./HomepageStyles.scss";
import { Helmet } from "react-helmet";

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Homepage Title</title>
        <meta name="description" content="Homepage Description" />
      </Helmet>
      <div className="homepage-container">
        <WeatherDisplay />
        <WeatherInput />
      </div>
    </>
  );
};

export default Homepage;
