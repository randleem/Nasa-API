import logo from "./logo.svg";
import "./App.css";
import React from "react";
import MarsWeather from "./Components/MarsWeather/index";
import Calendar from "./Components/Calendar/index";

function App() {
  return (
    <div className="App">
      <Calendar />
      <MarsWeather/>
    </div>
  );
}

export default App;
