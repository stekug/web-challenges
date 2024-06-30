import { useState, useEffect } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const fetchURL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState();

  useEffect(() => {
    getISSCoords();
    const interval = setInterval(getISSCoords, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const getISSCoords = async () => {
    const res = await fetch(fetchURL);
    const data = await res.json();
    setCoords({ longitude: data.longitude, latitude: data.latitude });
  };

  if (!coords) {
    return null;
  }

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        onRefresh={getISSCoords}
        longitude={coords.longitude}
        latitude={coords.latitude}
      />
    </main>
  );
}
