import logo from "./logo.svg";
import "./App.css";
import React from "react";
import MarsWeather from "./Components/MarsWeather/index";
import Calendar from "./Components/Calendar/index";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Space Birthday Picture</Link>
          <Link to="/marsPressure">Mars Pressured by Galaxy</Link>
        </nav>
        <Switch>
          <Route path="/marsPressure">
            <MarsWeather />
          </Route>
          <Route path="/">
            <Calendar />
          </Route>
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
