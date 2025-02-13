function OnlyOneMinute() {
  return (
    <div className="projectName">
      <div className="circle">
        <p className="align">2024</p>
      </div>
      <div className="verticalLine">
        <div className="projectContainer">
          <div className="blue">
            <h2 className="marginBottom">Only One Minute</h2>
          </div>
          <p>
            Gui is an exhausted intern in an office flooded with falsehood. All
            he has to do is survive the workday. Jump across platforms to
            complete your tasks... Well, technically, the tasks the others told
            Gui to do...
          </p>

          <div className="display">
            <div className="displayFlex">
              <h3 className="blue">full gameplay</h3>
              <div className="trailerDiv">
                <iframe
                  className="trailerIframe"
                  src="https://www.youtube.com/embed/tsEvDlP--bU?si=18Gv0wnPq_QgeCRL"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div className="displayFlex">
              <h3 className="blue">what i coded</h3>
              <ul>
                <li>player and camera movement</li>
                <li>coffee interaction, filling</li>
                <li>printer interaction, numpad</li>
              </ul>
              <h3 className="blue">what i drawn</h3>
              <ul>
                <li>numpad screen and buttons</li>
                <li>coffee button</li>
                <li>ui dialogue box</li>
                <li>ui tutorials</li>
                <li>ui game and company title card</li>
              </ul>
              <h3 className="blue">
                download at{" "}
                <a href="https://joojart.itch.io/so1minutinho">itch.io</a>
              </h3>
            </div>
          </div>
          <p style={{ marginBottom: 0 }}>
            This game was develop by three students as part of FeeJam I, a
            GameJam organized by the academic directory from Feevale University
            Digital Games course, NH/RS
          </p>
        </div>
        <br />
      </div>
    </div>
  );
}

export default OnlyOneMinute;
