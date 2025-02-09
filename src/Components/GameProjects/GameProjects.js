import "./GameProjects.css"
import WardenWarrior from "./WardenWarrior.js";
import OnlyOneMinute from "./OnlyOneMinute.js"
import StreetOrTreat from "./StreetOrTreat.js"
import Mantus from "./Mantus.js"

function GameProjects() {
  return (
    <div id="content">
      <div style={{marginTop: '5em'}}>
        <h1 className="projectsTitle">my game projects</h1>
        <Mantus />
        <StreetOrTreat />
        <OnlyOneMinute />
        <WardenWarrior />
      </div>
    </div>
  );
}

export default GameProjects;
