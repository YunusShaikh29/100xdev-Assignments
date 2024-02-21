import React from "react";
import Button from "./Button";

function Buttons() {
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        gap: "2rem"
    }}>
      <Button background={"red"} color={"black"} label={"Red"} />
      <Button background={"yellow"} color={"black"} label={"Yellow"}/>
      <Button background={"black"} color={"white"} label={"Black"}/>
      <Button background={"purple"} color={"black"} label={"Purple"}/>
      <Button background={"green"} color={"black"} label={"Green"}/>
      <Button background={"blue"} color={"white"} label={"Blue"}/>
      <Button background={"orange"} color={"black"} label={"Default"}/>
    </div>
  );
}

export default Buttons;
