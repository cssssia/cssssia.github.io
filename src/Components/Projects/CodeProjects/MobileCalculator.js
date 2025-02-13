function MobileCalculator() {
  return (
    <div className="projectName">
      <div className="circle">
        <p className="align">2021</p>
      </div>
      <div className="verticalLine">
        <div className="projectContainer">
          <div className="blue">
            <h2 className="marginBottom">Mobile Calculator</h2>
          </div>
          <p>
            A simple calculator developed for mobile with two screens, one being
            history function.
          </p>
          <div className="display">
            <div className="displayFlex">
              <h3 className="blue">demo</h3>
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <div>
                  <h3 className="blue">technologies used</h3>
                  <ul>
                    <li>android studio</li>
                    <li>java</li>
                  </ul>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    height: "100%",
                  }}
                >
                  <h3 className="blue" style={{ marginBottom: 0 }}>
                    code can be found at <a href="https://github.com/cssssia/ProjetoCalculator">github</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <p style={{ marginBottom: 0 }}>
            This application was develop by me as part of the Computational
            Challenge section from Feevale University Analysis and Systems
            Development course, NH/RS
          </p>
        </div>
        <br />
      </div>
      <div className="horizontalLine" />
    </div>
  );
}

export default MobileCalculator;
