import React, { useEffect, useState } from "react";

const GoogleMapsLoader = ({ onLoad }) => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const existingScript = document.getElementById("googleMaps");

      if (!existingScript) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${
          import.meta.env.VITE_GOOGLE_API_KEY
        }&libraries=places`;
        script.id = "googleMaps";
        script.async = true;
        script.defer = true;

        script.onload = () => {
          setIsScriptLoaded(true); // Script loaded successfully
          if (onLoad) onLoad(); // Callback if provided
        };

        document.body.appendChild(script);
      } else if (existingScript && existingScript.readyState === "complete") {
        // Script is already loaded
        setIsScriptLoaded(true);
        if (onLoad) onLoad();
      }
    };

    loadGoogleMapsScript();
  }, [onLoad]);

  return null; // This component doesn't render anything
};

export default GoogleMapsLoader;
