import "./Resume.css";
import dois from "../Photos/dois.png";
import tres from "../Photos/tres.png";
import quatro from "../Photos/quatro.png";

function Resume() {
  return (
    <div className="body">
      <div className="twoCollums">
        <div className="name">
          <h1>Cássia Toscani, 20</h1>
        </div>

        <div className="align">
          <b>cassia.toscani@gmail.com</b>
          <br />
          <b>+55 51 99279-1532</b>
          <br />
          <c href="https://www.linkedin.com/in/c%C3%A1ssia-toscani">
            Cássia Toscani on Linkedin
          </c>
          <br />
          <b>Novo Hamburgo</b>
        </div>
      </div>

      <h2>SAP Work Experiences</h2>

      <h4>Core Function</h4>

      <ul>
        <li>
          <h3>
            Product Support Intern at FIN&GRC LOB in PSM team{" "}
            <small>feb/2020 - now</small>
          </h3>
          <p>
            Provide support to customers in ERP and Finance Product under Public
            Sector Management specialities.
          </p>
        </li>
      </ul>

      <h4>Side Projects</h4>
      <ul>
        <li>
          <h3>
            Digitalization Portfolio <small>mar/2020 - now</small>
          </h3>
          <p>
            Development of an Internal SAP Plataform for organization and
            awareness of SAP LABS projects. Frontend development using React
            with UI5 components integrated to the Backend developed in Java.
          </p>
        </li>

        <li>
          <h3>
            SAP iXp & CSR Challenge: ÉPossível <small>jul/2020</small>
          </h3>
          <p>
            Development of a web platform and an awareness and marketing
            campaign for the social responsibility fund ÉPossível to help the
            Fundação Hospital Centenário keep fighting the Covid-19 pandemic.
          </p>
        </li>

        <li>
          <h3>
            SAP iXp Micro Project Learning <small>aug/2020</small>
          </h3>
          <p>
            Creation of a solution to help the SAP interns to meet each other,
            talk about their interests and make friends.
          </p>
        </li>

        <li>
          <h3>
            SAP iXp Hack4good <small>oct/2020</small>
          </h3>
          <p>
            A hackathon where me and my team develop a web solution in React to
            help waste pickers improve their job.
          </p>
        </li>

        <li>
          <h3>
            SAP iXp Intern Committee <small>dec/2020 - may/2021</small>
          </h3>
          <p>
            Organizes and coordinates various training courses for the
            development of interns.
          </p>
        </li>

        <li>
          <h3>
            SAP iXp Skills-Mastery Journey <small>oct/2020</small>
          </h3>
          <p>
            A series of trainings foucused in soft skills and career
            development.
          </p>
        </li>
      </ul>

      <div className="twoCollums">
        <div className="marginRight">
          <h2>Other Work Experiences</h2>
          <h4>Technical Intern</h4>
          <h3>
            Gerdau <small>oct/2019 - jan/2020</small>
          </h3>
          <p>Internship at electronic maintenance.</p>
        </div>

        <div>
          <h4>Technical Intern</h4>
          <h3>
            IhelpU <small>may/2019 - oct/2019</small>
          </h3>
          <p>
            Internship at technical assistant of Iphones; Atendent and seller.
          </p>
        </div>

        <div>
          <h2>Academic Formation</h2>
          <h4>System and Analysis Development</h4>
          <h3>
            Feevale <small>aug/2020 - aug/2022</small>
          </h3>
        </div>

        <div className="marginLeft">
          <h4 className="marginTop">
            Technical course in Electronics integrated with Secondary School
          </h4>
          <h3>
            Fundação Liberato <small>feb/2015 - jul/2020</small>
          </h3>
        </div>
      </div>

      <div className="marginLanguages">
        <div>
          <h2>Languages</h2>

          <h4>Portuguese</h4>
          <h3>Native</h3>
          <br />

          <h4>English</h4>
          <h3>Advanced</h3>
          <br />
        </div>

        <div>
          <h2>Skills</h2>

          <h4>Development Languages</h4>

          <div className="devLanguages">
            <h3>C</h3>
            <img src={quatro} className="img" />
            <br />
            <h3>HTML</h3>
            <img src={quatro} className="img" />
            <br />
          </div>

          <div className="devLanguages">
            <h3>Java</h3>
            <img src={tres} className="img" />
            <br />
            <h3>CSS</h3>
            <img src={quatro} className="img" />
            <br />
          </div>

          <div className="devLanguages">
            <h3>React</h3>
            <img src={tres} className="img" />
            <br />
            <h3>JS</h3>
            <img src={dois} className="img" />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
