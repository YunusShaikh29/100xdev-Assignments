import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Buttons from "./components/Buttons";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("white");
  const colorsArry = [
    { background: "red", color: "black", label: "Red" },
    { background: "Yellow", color: "black", label: "Yellow" },
    { background: "Black", color: "white", label: "Black" },
    { background: "Purple", color: "white", label: "Purple" },
    { background: "Green", color: "white", label: "Green" },
    { background: "Blue", color: "white", label: "Blue" },
    { background: "Orange", color: "white", label: "Default" },
  ];

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        gap: "2rem",
        width: "100%",
        height: "95vh",
        background: color,
      }}
    >
      {colorsArry.map((e) => (
        <Button
          background={e.background}
          color={e.color}
          label={e.label}
          onClick={handleColorChange}
          key={e.label}
        />
      ))}
    </div>
  );
}

export default App;
