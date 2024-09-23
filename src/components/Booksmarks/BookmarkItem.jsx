import React, { useContext } from "react";
import { WeatherContext } from "../../hooks/weatherContext";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";

const BookmarkItem = ({ name, value }) => {
  const { handleBookmarkClick } = useContext(WeatherContext);
  return (
    <div
      className="bookmark-item-container"
      onClick={() => handleBookmarkClick(value)}
    >
      <div className="bookmark-item-wrapper">
        <div className="bookmark-icon">
          <FmdGoodRoundedIcon />
        </div>
        <div className="bookmark-name">{name}</div>
      </div>
    </div>
  );
};

export default BookmarkItem;
