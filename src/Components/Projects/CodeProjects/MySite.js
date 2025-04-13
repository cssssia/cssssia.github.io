function MySite() {
  return (
    <div className="projectName">
      <div className="circle">
        <p className="align">2023</p>
      </div>
      <div className="verticalLine">
        <div className="projectContainer">
          <div className="blue">
            <h2 className="marginBottom">My Site</h2>
          </div>
          <p>
            My personal website, with the objective of combining all my career
            information.
          </p>

          <div className="display">
            <div className="displayFlex">
              <h3 className="blue">demo</h3>
              {/* <div className="trailerDiv"> */}
                <p>
                  feel free to check it out!
                </p>
                {/* <iframe
                  className="trailerIframe"
                  src="https://www.youtube.com/embed/CISFEXS0O3M"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe> */}
              {/* </div> */}
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
                    <li>javascript</li>
                    <li>html</li>
                    <li>css</li>
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
                    code can be found at <a href="https://github.com/cssssia/cssssia.github.io">github</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <p style={{ marginBottom: 0 }}>This application was develop by me as a side project</p>
        </div>
        <br />
      </div>
    </div>
  );
}

export default MySite;
