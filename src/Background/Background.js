import "./Background.css";
import joystick from "../Photos/joystick.svg";
import oldController from "../Photos/oldController.svg";
import controller from "../Photos/controller.svg";
import code from "../Photos/code.svg";

function Background() {

  return (
    <div>
      <div className="container">
        <div className="firstPosition">
          <div className="scale">
            <img src={joystick} alt="joystick" className="rotation"/>
          </div>
        </div>
        <div className="secondPosition">
          <div className="scale">
            <img src={oldController} alt="oldController" className="rotationBackwards"/>
          </div>
        </div>
        <div className="thirdPosition">
          <div className="scale">
            <img src={joystick} alt="joystick" className="rotation"/>
          </div>
        </div>
        <div className="forthPosition">
          <div className="scale">
            <img src={oldController} alt="oldController" className="rotationBackwards"/>
          </div>
        </div>
        <div className="fifthPosition">
          <div className="scale">
            <img src={controller} alt="controller" className="rotation"/>
          </div>
        </div>
        <div className="sixthPosition">
          <div className="scale">
            <img src={code} alt="code" className="rotationBackwards"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Background;
