import { useState } from "react";
import "./App.css";

function App() {
  const [selectedColor, setSelectedColor] = useState("");

  const changeColor = () => {
    if (selectedColor === "red") {
      setSelectedColor("yellow");
    } else if (selectedColor === "yellow") {
      setSelectedColor("green");
    } else {
      setSelectedColor("red");
    }
  };

  return (
    <>
      <div className="support"></div>
      <div className="container-stick d-flex justify-content-center">
        <div className="stick"></div>
      </div>

      <div className="trafficlight">
        <div
          onClick={() => setSelectedColor("red")}
          className={"light " + (selectedColor === "red" ? "red glow" : "red")}
        ></div>
        <div
          onClick={() => setSelectedColor("yellow")}
          className={
            "light " + (selectedColor === "yellow" ? "yellow glow" : "yellow")
          }
        ></div>
        <div
          onClick={() => setSelectedColor("green")}
          className={
            "light " + (selectedColor === "green" ? "green glow" : "green")
          }
        ></div>
      </div>
      <div className="container-button d-flex  flex-column justify-content-center mt-5">
        <button onClick={changeColor} className=" btn btn-success">
          ¡Cambia de color!
        </button>
        <button
          onClick={() => setSelectedColor("")}
          className="btn btn-danger mt-5"
        >
          ¡Reset!
        </button>
      </div>
    </>
  );
}

export default App;
