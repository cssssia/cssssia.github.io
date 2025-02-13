import "./../Projects.css"
import ExpensesControl from "./ExpensesControl.js";
import MobileCalculator from "./MobileCalculator.js";
import MySite from "./MySite.js";

function CodeProjects() {
  return (
    <div id="content" style={{ paddingBottom: "5em" }}>
      <div style={{marginTop: '5em'}}>
        <h1 className="sectionTitle">my code projects</h1>
        <div className="marginTop">
          <MySite />
          <ExpensesControl />
          <MobileCalculator />
        </div>
      </div>
    </div>
  );
}

export default CodeProjects;
