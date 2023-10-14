import "./App.css";
import "./components/style.css";
import React, { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const [Color, setColor] = useState("white");

  const toggleColor_red = () => {
    setColor("red");
    console.log("Red button pressed");
  };
  const toggleColor_yellow = () => {
    console.log("Yellow button pressed");
    setColor("yellow");
  };
  const toggleColor_green = () => {
    setColor("green");
    console.log("Green button pressed");
  };
  const toggleColor_pink = () => {
    setColor("pink");
    console.log("Pink button pressed");
  };
  const toggleColor_blue = () => {
    setColor("blue");
    console.log("Blue button pressed");
  };

  const buttonStyle = {
    backgroundColor: Color.toString(),
  };

  const buttonStyle_blue = {
    backgroundColor: "blue",
  };

  const buttonStyle_red = {
    backgroundColor: "red",
  };

  const buttonStyle_pink = {
    backgroundColor: "pink",
  };

  const buttonStyle_green = {
    backgroundColor: "green",
  };

  const buttonStyle_yellow = {
    backgroundColor: "yellow",
  };

  console.log(Color.toString());

  return (
    <>
      <div>
        <button onClick={toggleVisibility} style={buttonStyle}>
          Pick a Color
        </button>
      </div>

      {isVisible && (
        <div>
          <button onClick={toggleColor_blue} style={buttonStyle_blue}>
            blue
          </button>
          <button onClick={toggleColor_red} style={buttonStyle_red}>
            red
          </button>
          <button onClick={toggleColor_yellow} style={buttonStyle_yellow}>
            yellow
          </button>
          <button onClick={toggleColor_green} style={buttonStyle_green}>
            green
          </button>
          <button onClick={toggleColor_pink} style={buttonStyle_pink}>
            pink
          </button>
        </div>
      )}
    </>
  );
}

export default App;
