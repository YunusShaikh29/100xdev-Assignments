import React, { useState } from "react";

import styles from "./components/Input.module.css";

import "./App.css";

function App() {
  const [inputs, setInputs] = useState(["", "", "", ""]);
  const inputRefs = inputs.map(() => React.createRef());

  const handleOnChange = (index) => (e) => {
    const isBackspacePressed = e.target.value === 1 || e.target.value.length === 0;
    

    if (isBackspacePressed) {
      // Handle backspace key press
      // Clear the current input
      const newInputs = [...inputs];
      newInputs[index] = "";
      setInputs(newInputs);

      // Move focus to the previous input if the current input is not the first one
      if (index > 0) {
        inputRefs[index - 1].current.focus();
      }
    } else {
      // Handle other key presses
      const newInputs = [...inputs];
      newInputs[index] = e.target.value;
      setInputs(newInputs);

      // Move focus to the next input if the current input is not the last one
      if (e.target.value !== "" && index < inputs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  return (
    <>
      <h1>Hellow world</h1>
      <div className={styles.input_container}>
        {inputs.map((input, index) => (
          <input
            key={index}
            className={styles.input}
            onChange={handleOnChange(index)}
            ref={inputRefs[index]}
          />
        ))}
      </div>
    </>
  );
}

export default App;
