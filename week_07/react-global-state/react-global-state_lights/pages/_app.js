import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  {
    id: crypto.randomUUID(),
    name: "Living Room",
    isOn: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Kitchen",
    isOn: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Bedroom",
    isOn: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Bathroom",
    isOn: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Garage",
    isOn: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Porch",
    isOn: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Garden",
    isOn: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Office",
    isOn: false,
  },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);
  const lightCountOn = lights
    .map((light) => light.isOn)
    .filter((light) => light === true).length;

  const handleLightToggle = (id) => {
    setLights(
      lights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  };

  const handleSwitchAllOn = () => {
    setLights(lights.map((light) => light && { ...light, isOn: true }));
  };
  const handleSwitchAllOff = () => {
    setLights(lights.map((light) => light && { ...light, isOn: false }));
  };

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        handleLightToggle={handleLightToggle}
        lightCountOn={lightCountOn}
        handleSwitchAllOn={handleSwitchAllOn}
        handleSwitchAllOff={handleSwitchAllOff}
      />
    </Layout>
  );
}
