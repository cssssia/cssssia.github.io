function Mantus() {
  return (
    <div className="projectName">
      <div className="circle">
        <p className="align">2024</p>
      </div>
      <div className="verticalLine">
        <div className="projectContainer">
          <div className="blue">
            <h2 className="marginBottom">Mantus</h2>
          </div>
          <p>
            An Host Based Online Multiplayer. Play a match of a customized
            version of Truco against someone. Bet your eyes and try not to lose
            your soul.
          </p>

          <div className="display">
            <div className="displayFlex">
              <h3 className="blue">trailer</h3>
              <div className="trailerDiv">
                <iframe
                  className="trailerIframe"
                  src="https://www.youtube.com/embed/CISFEXS0O3M"
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
                <li>which card win against which</li>
                <li>when a player wins, drawn or loses</li>
                <li>points showing on the table</li>
                <li>bets management</li>
                <li>eyes management accordingly to bets and wins</li>
                <li>lobbies creation, handle</li>
                <li>online multiplayer structure and sync</li>
                <li>all menus</li>
                <li>fmod sounds integretion</li>
              </ul>
              <h3 className="blue">
                download at{" "}
                <a href="https://projetos-jogos-feevale.itch.io/mantus">
                  itch.io
                </a>
              </h3>
            </div>
          </div>
          <p style={{ marginBottom: 0 }}>
            This game was develop by four students as part of the Project III
            section from Feevale University Digital Games course, NH/RS
          </p>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Mantus;
