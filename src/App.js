import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import RobotInfo from "./components/RobotInfo";


function App() {
  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/robot-info/:id">
            <RobotInfo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
