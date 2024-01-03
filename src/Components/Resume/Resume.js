import "./Resume.css";

function Resume() {

  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  let age;

  if (month > 5)
    age = year - 2000;
  else if (month < 5)
    age = year - 2001;
  else
    if (day >= 22)
      age = year - 2000;
    else
      age = year - 2001;

  return (
    <div className="body">

      <div className="twoCollums">

        <div className="collumn">
          <h1 className="name">Cássia Toscani, {age}</h1>
        </div>

        <div className="collumn">
          <div className="align">
            <p className="information">cassia.toscani@gmail.com</p>
            <p className="information">+55 51 99279-1532</p>
            <p className="information"><a className="link" href="https://www.linkedin.com/in/c%C3%A1ssia-toscani" target="_blank" rel="noreferrer">Cássia Toscani on Linkedin</a></p>
            <p className="information">Brazil, NH/RS</p>
          </div>
        </div>

      </div>

      <h2 className="firstTitle">SAP Work Experiences</h2>

      <h4 className="subtitle">Core Function</h4>

      <ul>

        <li>
          <h3 className="experience">Product Support Intern at FIN&GRC LOB in PSM team{" "} <small>feb/2020 - now</small></h3>
          <p className="description">Provide support to customers in ERP and Finance Product under Public Sector Management specialities.</p>
        </li>

      </ul>

      <h4 className="subtitle">Side Projects</h4>

      <ul>

        <li>
          <h3 className="experience">Digitalization Portfolio <small>mar/2020 - now</small></h3>
          <p  className="description">Development of an Internal SAP Plataform for organization and awareness of SAP LABS projects. Frontend development using React with UI5 components integrated to the Backend developed in Java.</p>
        </li>

        <li>
          <h3 className="experience">SAP iXp & CSR Challenge: ÉPossível <small>jul/2020</small></h3>
          <p className="description">Development of a web platform and an awareness and marketing campaign for the social responsibility fund ÉPossível to help the Fundação Hospital Centenário keep fighting the Covid-19 pandemic.</p>
        </li>

        <li>
          <h3 className="experience">SAP iXp Micro Project Learning <small>aug/2020</small></h3>
          <p className="description">Creation of a solution to help the SAP interns to meet each other, talk about their interests and make friends.</p>
        </li>

        <li>
          <h3 className="experience">SAP iXp Hack4good <small>oct/2020</small></h3>
          <p className="description">A hackathon where me and my team develop a web solution in React to help waste pickers improve their job.</p>
        </li>

        <li>
          <h3 className="experience">SAP iXp Intern Committee <small>dec/2020 - may/2021</small></h3>
          <p className="description">Organizes and coordinates various training courses for the development of interns.</p>
        </li>

        <li>
          <h3 className="experience">SAP iXp Skills-Mastery Journey <small>oct/2020</small></h3>
          <p className="description">A series of trainings foucused in soft skills and career development.</p>
        </li>

      </ul>

      <div className="twoCollums">

        <div className="collumn">

          <h2 className="title">Other Work Experiences</h2>

          <div>
            <h4 className="subtitle">Technical Intern</h4>
            <h3 className="experience">Gerdau <small>oct/2019 - jan/2020</small></h3>
            <p className="description">Internship at electronic maintenance.</p>
          </div>

          <div>
            <h4 className="subtitle">Technical Intern</h4>
            <h3 className="experience">IhelpU <small>may/2019 - oct/2019</small></h3>
            <p className="description">Internship at technical assistant of Iphones; Atendent and seller.</p>
          </div>

        </div>


        <div className="collumn">

          <h2 className="title">Academic Formation</h2>

          <div>
            <h4 className="subtitle">System and Analysis Development</h4>
            <h3 className="experience">Feevale <small>aug/2020 - aug/2022</small></h3>
          </div>

          <div className="marginTop">
            <h4 className="subtitle">Technical course in Electronics integrated with Secondary School</h4>
            <h3 className="experience">Fundação Liberato <small>feb/2015 - jul/2020</small></h3>
          </div>

        </div>

      </div>

      <div className="twoCollums">

        <div className="collumn">

          <h2 className="title">Speaking Languages</h2>

          <div className="twoCollums">
            <div className="collumn">
              <h4 className="subtitle">Portuguese</h4>
              <h3 className="experience">Native</h3>
              <br />

              <h4 className="subtitle">German</h4>
              <h3 className="experience">Basic</h3>
              <br />
            </div>

            <div className="collumn">
              <h4 className="subtitle">English</h4>
              <h3 className="experience">Advanced</h3>
              <br />
            </div>
          </div>

        </div>

        <div className="collumn">

          <h2 className="title">Development Languages</h2>

          <div className="threeCollumns">
            <div className="devLanguages">
              <h4 className="subtitle">C/C++</h4>
              <div className="parallelogramDiv">
                <div className="parallelogramFull"></div>
                <div className="parallelogramFull"></div>
                <div className="parallelogramFull"></div>
                <div className="parallelogramFull"></div>
                <div className="parallelogramEmpty"></div>
              </div>
              <br />
              <h4 className="subtitle">C#</h4>
              <div className="parallelogramDiv">
                <div className="parallelogramFull"></div>
                <div className="parallelogramFull"></div>
                <div className="parallelogramFull"></div>
                <div className="parallelogramFull"></div>
                <div className="parallelogramEmpty"></div>
              </div>
              <br />
            </div>

            <div className="devLanguages">
              <h4 className="subtitle">Java</h4>
              <div className="parallelogramDiv">
                <div className="parallelogramFull"></div>
                <div className="parallelogramFull"></div>
                <div className="parallelogramFull"></div>
                <div className="parallelogramFull"></div>
                <div className="parallelogramEmpty"></div>
              </div>
              <br />
              <h4 className="subtitle">SQL</h4>
              <div className="parallelogramDiv">
                <div className="parallelogramFull"></div>
                <div className="parallelogramFull"></div>
                <div className="parallelogramFull"></div>
                <div className="parallelogramEmpty"></div>
                <div className="parallelogramEmpty"></div>
              </div>
              <br />
            </div>

            <div className="devLanguages">
              <h4 className="subtitle">JavaScript</h4>
              <div className="parallelogramDiv">
                <div className="parallelogramFull"></div>
                <div className="parallelogramFull"></div>
                <div className="parallelogramFull"></div>
                <div className="parallelogramEmpty"></div>
                <div className="parallelogramEmpty"></div>
              </div>
              <br />
              <h4 className="subtitle">HTML/CSS</h4>
              <div className="parallelogramDiv">
                <div className="parallelogramFull"></div>
                <div className="parallelogramFull"></div>
                <div className="parallelogramFull"></div>
                <div className="parallelogramFull"></div>
                <div className="parallelogramEmpty"></div>
              </div>
              <br />
            </div>
          </div>


        </div>

      </div>

    </div>
  );
}

export default Resume;
