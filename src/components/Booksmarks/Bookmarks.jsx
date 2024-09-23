import React, { useContext } from "react";
import "./BookmarksStyles.scss";
import { WeatherContext } from "../../hooks/weatherContext";
import bookmarkedData from "./bookmarkedData";
import BookmarkItem from "./BookmarkItem";
import LibraryAddRoundedIcon from "@mui/icons-material/LibraryAddRounded";

const Bookmarks = () => {
  const { viewBookmarks } = useContext(WeatherContext);

  return (
    <>
      {viewBookmarks && (
        <div className="bookmarks-container">
          <div className="bookmarks-title">My Locations</div>
          <div className="bookmarks-wrapper">
            {bookmarkedData.map((bookmark, key) => (
              <BookmarkItem
                key={key}
                name={bookmark.name}
                value={bookmark.value}
              />
            ))}
            <div className="bookmark-item-container add-bookmark">
              <div className="bookmark-item-wrapper add">
                <div className="bookmark-icon">
                  <LibraryAddRoundedIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Bookmarks;
