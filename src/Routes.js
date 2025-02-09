import "./App.css";
import Header from "./Header/Header.js";
import Background from "./Background/Background.js";
import HomePage from "./Components/AboutMe/AboutMe.js";
import CodeProjects from "./Components/CodeProjects/CodeProjects.js";
import GameProjects from "./Components/GameProjects/GameProjects.js";
import Art from "./Components/Art/Art.js";
import Resume from "./Components/Resume/Resume.js";
import Portfolio from "./Components/Portfolio/Portfolio.js";
import Contact from "./Components/Contact/Contact.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Routes() {
  return (
    <Router>
      <Header />
      <div style={{ position: "relative" }}>
        <div style={{ overflow: "hidden" }}>
          <Background />

          <div>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/codeProjects" component={CodeProjects} />
              <Route path="/gameProjects" component={GameProjects} />
              <Route path="/art" component={Art} />
              <Route path="/resume" component={Resume} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Routes;
