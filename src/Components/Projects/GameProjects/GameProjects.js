import "./../Projects.css"
import WardenWarrior from "./WardenWarrior.js";
import OnlyOneMinute from "./OnlyOneMinute.js"
import StreetOrTreat from "./StreetOrTreat.js"
import Mantus from "./Mantus.js"

function projectName() {
  return (
    <div id="content" style={{ paddingBottom: "5em" }}>
      <div style={{marginTop: '5em'}}>
        <h1 className="sectionTitle">my game projects</h1>
        <Mantus />
        <StreetOrTreat />
        <OnlyOneMinute />
        <WardenWarrior />
      </div>
    </div>
  );
}

export default projectName;
