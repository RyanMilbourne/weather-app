const InfoRowItem = ({ hero, secondary, adjust }) => {
  return (
    <>
      <div className="info-row-item">
        <div className={`info-row-hero ${adjust ? "adjust" : ""}`}>{hero}</div>
        <div className="info-row-secondary">{secondary}</div>
      </div>
    </>
  );
};

export default InfoRowItem;
