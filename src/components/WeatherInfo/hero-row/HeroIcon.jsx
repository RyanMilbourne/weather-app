import React from "react";

import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import GrainRoundedIcon from "@mui/icons-material/GrainRounded";
import WbCloudyRoundedIcon from "@mui/icons-material/WbCloudyRounded";
import ThunderstormRoundedIcon from "@mui/icons-material/ThunderstormRounded";
import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";
import LensBlurRoundedIcon from "@mui/icons-material/LensBlurRounded";

const HeroIcon = ({ iconId }) => {
  return (
    <div className="hero-icon-wrapper">
      {(iconId === "01d" || iconId === "01n") && <WbSunnyRoundedIcon />}
      {(iconId === "02d" || iconId === "02n") && <WbCloudyRoundedIcon />}
      {(iconId === "03d" || iconId === "03n") && <WbCloudyRoundedIcon />}
      {(iconId === "04d" || iconId === "04n") && <WbCloudyRoundedIcon />}
      {(iconId === "09d" || iconId === "09n") && <GrainRoundedIcon />}
      {(iconId === "10d" || iconId === "10n") && <GrainRoundedIcon />}
      {(iconId === "11d" || iconId === "11n") && <ThunderstormRoundedIcon />}
      {(iconId === "13d" || iconId === "13n") && <AcUnitRoundedIcon />}
      {(iconId === "50d" || iconId === "50n") && <LensBlurRoundedIcon />}
    </div>
  );
};

export default HeroIcon;
