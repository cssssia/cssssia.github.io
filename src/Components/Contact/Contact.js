import "./Contact.css"
import Background from "../../Background/Background.js";

function Contact() {
  return (
    <div>
      <div className="container">
        <Background />
        <div className="contact">
          <h1 className="font-weight">contact me!</h1>
          <h2 className="font-weight">
            mail me at <span className="blue">cassia.toscani@gmail.com</span>; <br />
            call me or send me an whatsapp message at <span className="blue">+55 51 99279-1532</span>; <br />
            connect with me on <a className="link" href="htth2s://www.linkedin.com/in/c%C3%A1ssia-toscani" target="_blank" rel="noreferrer">linkedin</a>; <br />
            check my <a className="link" href="https://cssssia.itch.io/" target="_blank" rel="noreferrer">itch.io</a> page to see all my games developed; <br />
            follow me on <a className="link" href="https://github.com/cssssia" target="_blank" rel="noreferrer">github</a> to keep up with all my projects. <br />
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Contact;
