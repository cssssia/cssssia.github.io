import "./Contact.css";

function Contact() {
  return (
    <div id="content" style={{ paddingBottom: "5em" }}>
      <div style={{marginTop: '10em'}}>
        <div className="contact">
          <h1 style={{fontWeight: 'normal'}}>contact me!</h1>
          <h2 style={{fontWeight: 'normal'}}>
            mail me at <span className="blue">cassia.toscani@gmail.com</span>;{" "}
            connect with me on{" "}
            <a
              className="link"
              href="htth2s://www.linkedin.com/in/c%C3%A1ssia-toscani"
              target="_blank"
              rel="noreferrer"
            >
              linkedin
            </a>
            ; <br />
            check my{" "}
            <a
              className="link"
              href="https://cssssia.itch.io/"
              target="_blank"
              rel="noreferrer"
            >
              itch.io
            </a>{" "}
            page to see all my games developed; <br />
            follow me on{" "}
            <a
              className="link"
              href="https://github.com/cssssia"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>{" "}
            to keep up with all my projects. <br />
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Contact;
