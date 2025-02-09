import Background from "../../Background/Background.js";
import ExpensesControl from "./ExpensesControl.js";
import ProjetoCalculator from "./ProjetoCalculator.js";
import MySite from "./MySite.js";

function CodeProjects() {
  return (
    <div>
      <h1 className="projectsTitle">my code projects</h1>
      <div className="marginTop">
        <MySite />
        <ExpensesControl />
        <ProjetoCalculator />
      </div>
    </div>
  );
}

export default CodeProjects;
