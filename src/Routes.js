import HomePage from "./HomePage/HomePage";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Header from "./Header/Header";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function Routes() {
  return(
    <Router >
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/Resume" component={Resume}/>
        <Route path="/Projects" component={Projects}/>
      </Switch>
    </Router>
  );
}

export default Routes;