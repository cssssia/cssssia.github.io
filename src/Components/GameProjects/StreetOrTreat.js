import "./GameProjects.css";

function StreetOrTreat() {
  return (
    <div>

    <div className="gameProjects">
      <div className="ball">
        <p className="align">2024</p>
      </div>
      <div className="vl">
        <div className="projectContainer">
          <div className="blue">
            <h2 className="marginBottom">Street Or Treat</h2>
          </div>
          <p>
            Steal candy from your friends and avoid getting run over on a
            chaotic Halloween day! A reinvented capture the flag, with elements
            from the classic Arcade Frogger, in a 3D environment with 2D
            elements.
          </p>
          <div className="display">
            <div className="displayFlex">
              <h3 className="blue">gameplay trailer</h3>
              <div className="trailerDiv">
                <iframe
                  className="trailerIframe"
                  src="https://www.youtube.com/embed/YW4cV8udcsk?si=t1mwCbNOaGa7xq1V"
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
                <li>car spawn management</li>
                <li>warning before car spawn</li>
                <li>car wait for other cars on intersection</li>
                <li>player character and color selection</li>
                <li>
                  animation handle accordingly with character and color selected
                </li>
                <li>ui flags in base</li>
              </ul>
              <h3 className="blue">
                download at{" "}
                <a href="https://exaustaoabsoluta.itch.io/street-or-treat">
                  itch.io
                </a>
              </h3>
            </div>
          </div>
          <p>
            This game was develop by four students as part of GameJamPlus 2024,
            an international GameJam
          </p>
          <br />
        </div>
      </div>
    </div>
    </div>
  );
}

export default StreetOrTreat;
