import "./LoadingStyles.scss";
import SyncRoundedIcon from "@mui/icons-material/SyncRounded";

const Loading = () => {
  const iconStyle = {
    width: "2rem",
    height: "2rem",
  };
  return (
    <div className="loading-container">
      <SyncRoundedIcon style={iconStyle} />
      <div className="loading-wrapper">...loading app</div>
    </div>
  );
};

export default Loading;
