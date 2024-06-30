import "./Controls.css";

export default function Controls({
  longitude,
  latitude,
  onRefresh: handleClick,
}) {
  return (
    <div className="controls">
      <output className="controls__display">Lat: {latitude.toFixed(5)}</output>
      <output className="controls__display">Lng: {longitude.toFixed(5)}</output>
      <button className="controls__button" onClick={handleClick} type="button">
        Refresh
      </button>
    </div>
  );
}
