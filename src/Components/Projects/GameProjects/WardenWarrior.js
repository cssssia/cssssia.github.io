function WardenWarrior() {
  return (
    <div className="projectName">
      <div className="circle">
        <p className="align">2023</p>
      </div>
      <div className="verticalLine">
        <div className="projectContainer">
          <div className="blue">
            <h2 className="marginBottom">Warden & Warrior</h2>
          </div>
          <p>
            The Hero is coming to your dungeon, and you haven't prepared
            anything! Rush to light up the torches, complete puzzles quickly and
            get the dungeon in order before he sees you or gets to an impossible
            obstacle!
          </p>

          <div className="display">
            <div className="displayFlex">
              <h3 className="blue">trailer</h3>
              <div className="trailerDiv">
                <iframe
                  className="trailerIframe"
                  src="https://www.youtube.com/embed/ZxuKxuUviGs?si=_pBn9g0aMHj-Aoz_"
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
                <li>player and box movement in grid</li>
                <li>player climb into box</li>
                <li>box pushable by player and hero</li>
                <li>hole interaction with player, hero and box</li>
                <li>level completed detection</li>
                <li>main and pause menu</li>
                <li>save and select level system</li>
                <li>and also trailer idealization and edit</li>
              </ul>
              <h3 className="blue">
                download at{" "}
                <a href="https://projetos-jogos-feevale.itch.io/warden-warrior">
                  itch.io
                </a>
              </h3>
            </div>
          </div>
          <p style={{ marginBottom: 0 }}>
            This game was develop by four students as part of the Project I
            section from Feevale University Digital Games course, NH/RS
          </p>
        </div>
        <br />
      </div>
      <div className="horizontalLine" />
    </div>
  );
}

export default WardenWarrior;
