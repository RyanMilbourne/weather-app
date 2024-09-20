import React, { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";
import GoogleMapsLoader from "./components/GoogleMapsLoader/GoogleMapsLoader";
import Loading from "./components/GoogleMapsLoader/Loading";

function App() {
  const [isGoogleMapsLoaded, setIsGoogleMapsLoaded] = useState(false);

  const handleGoogleMapsLoad = () => {
    setIsGoogleMapsLoaded(true);
  };

  return (
    <>
      <GoogleMapsLoader onLoad={handleGoogleMapsLoad} />

      {isGoogleMapsLoaded ? (
        <BrowserRouter>
          <HomeRoute />
        </BrowserRouter>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default App;
