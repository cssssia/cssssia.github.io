import "./HomePage.css";
import it from "../Photos/it.jpg";

function HomePage() {
  return (
    <div>
      <div className="body">
        <h1>Hey! My name is Cássia.</h1>
        <h2>
          I am a system analysis and development student, passionate about the
          geek enviroment and learning new things.
        </h2>
        <img src={it} alt="it" />
      </div>
    </div>
  );
}

export default HomePage;
