import { useRef, useState } from "react";
import "./Input.css";
import { useEffect } from "react";
import { UserCard } from "./UserCard";

function Input() {
  const [user, setUser] = useState();
  const [githubInfo, setGithubInfo] = useState({});
  const [dataArrived, setDataArrived] = useState(false)
  // const inputRef = useRef();

  const handleOnChange = (e) => {
    setUser(e.target.value);
  };

  const fetchUserGithub = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${user}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching words:", error);
    }
  };

  const handleOnClick = async () => {
    setUser("")
    const data = await fetchUserGithub();
    setGithubInfo(data);
    setDataArrived(true)
  };

  return (
      <div style={{width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
        <h1 className="header">Github Cards: </h1>
      <div className="container">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Enter github username"
            value={user}
            // ref={inputRef}
            className="input"
            onChange={handleOnChange}
          />
          <button onClick={handleOnClick} className="button">
            Generate
          </button>
        </div>
        
      </div>
      {dataArrived && <UserCard data={githubInfo} date={githubInfo.created_at}/>}
    </div>
  );
}

export default Input;
