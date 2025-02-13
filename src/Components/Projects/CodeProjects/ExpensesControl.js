function ExpensesControl() {
  return (
    <div className="projectName">
      <div className="circle">
        <p >2022</p>
      </div>
      <div className="verticalLine">
        <div className="projectContainer">
          <div className="blue">
            <h2 className="marginBottom">Expenses Control</h2>
          </div>
          <p>
            An web application with the objective of categorizing expenses by
            month and year, where the user can add their past and future costs,
            providing a description for each one, if desired, and being able to
            mark them as paid.
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
                    <li>javascript</li>
                    <li>java</li>
                    <li>sql</li>
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
                    code can be found at github: <a href="https://github.com/cssssia/expenses-control-backend">backend</a>
                    {" "} and <a href="https://github.com/cssssia/expenses-control-frontend">frontend</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <p style={{ marginBottom: 0 }}>
            This application was develop by me as part of the Project -
            Technological Innovations section from Feevale University Analysis
            and Systems Development course, NH/RS
          </p>
        </div>
        <br />
      </div>
    </div>
  );
}

export default ExpensesControl;
