import { useRef, useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [wordsCount, setWordsCount] = useState();
  const [paragraph, setParagraph] = useState("");
  // const inputRef = useRef();

  const handleOnChange = (e) => {
    setWordsCount(e.target.value);
  };

  const fetchWords = async () => {
    try {
      const response = await fetch(
        `https://random-word-api.vercel.app/api?words=${wordsCount}`
      );
      const data = await response.json();
      return data.join(" ");
    } catch (error) {
      console.error("Error fetching words:", error);
    }
  };

  const handleOnClick = async () => {
    setWordsCount(0)
    const paragraph = await fetchWords();
    setParagraph(paragraph);
  };

  return (
    <>
      <h1 className="header">Para generator</h1>
      <div className="container">
        <div className="inputContainer">
          <input
            type="number"
            placeholder="Number of words for paragraph"
            value={wordsCount}
            // ref={inputRef}
            className="input"
            onChange={handleOnChange}
          />
          <button onClick={handleOnClick} className="button">
            Generate
          </button>
        </div>
      </div>
      <div className="generatedParagraph">{paragraph}</div>
    </>
  );
}

export default App;
