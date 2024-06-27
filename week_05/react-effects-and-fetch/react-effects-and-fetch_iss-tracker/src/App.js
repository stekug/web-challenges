import { useState, useEffect } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState();

  const [count, setCount] = useState(0);

  function refreshHandler() {
    setCount(count + 1);
  }

  // console.log("Count", count);

  useEffect(() => {
    async function getISSCoords() {
      const res = await fetch(URL);
      // console.log(res);
      const data = await res.json();
      // console.log(data);
      setCoords({ longitude: data.longitude, latitude: data.latitude });
    }

    getISSCoords();

    const interval = setInterval(() => {
      setCount((oldCount) => oldCount + 1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  if (!coords) {
    return null;
  }

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={refreshHandler}
      />
    </main>
  );
}
