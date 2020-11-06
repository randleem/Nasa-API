import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Calendar from "./Components/Calendar/index";
import GalaxyViewer from "./Galaxy"

function App() {

  return (
    <div className="App">
      <Calendar />
      <header className="App-header">
        <GalaxyViewer/>
      </header>
    </div>
  );
}

export default App;
