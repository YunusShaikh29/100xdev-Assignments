import React from "react";

function Button({ background, color, onClick, label }) {
  return (
    <button
      style={{
        backgroundColor: background,
        color: color,
        padding: "1em 2em",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "1.2rem",
        fontWeight: "bold",
      }}
      onClick={() => onClick(background)}
    >
      {label}
    </button>
  );
}

export default Button;
