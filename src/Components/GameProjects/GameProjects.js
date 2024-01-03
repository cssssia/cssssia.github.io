import "./GameProjects.css"
import Background from "../../Background/Background.js";
import WardenWarrior from "./WardenWarrior.js";

function GameProjects() {
  return (
    <div>
      <Background />
      <h1 className="projectsTitle">my game projects</h1>
      <WardenWarrior />
    </div>
  );
}

export default GameProjects;
